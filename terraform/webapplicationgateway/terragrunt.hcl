include {
  path = find_in_parent_folders()
}

dependency "resourceGroups" {
  config_path = "../resourcegroups"
}
dependency "infrastructure" {
  config_path = "../infrastructure"
}
dependency "appService" {
  config_path = "../appservice"
}

inputs = merge({
  network_resource_group  = dependency.resourceGroups.outputs.networkRgName
  location  = dependency.resourceGroups.outputs.location
  subnet_id   = dependency.infrastructure.outputs.subnetId
  vnet_id  = dependency.infrastructure.outputs.vnetId
  primary_public_ip_fqdn = dependency.infrastructure.outputs.publicIpFqdn_primary
  public_ip_id_primary = dependency.infrastructure.outputs.publicIpId_primary
  primary_application_appservice_hostname = dependency.appService.outputs.primaryAppServiceHostname
  diagnostic_storage_account_id  = dependency.infrastructure.outputs.diagnosticStorageAccountId
})

terraform {
  extra_arguments "common_vars" {
    commands = ["plan", "apply", "import", "destroy"]
    arguments = local.varfile != null ? ["-var-file=${local.varfile}"] : []
  }

  before_hook "copy_parent_variables" {
    commands     = ["apply", "plan", "import", "destroy"]
    execute      = ["cp", "../variables.tf", "."]
  }

  after_hook "remove_parent_variables" {
    commands     = ["apply", "plan", "import", "destroy"]
    execute      = ["rm", "./variables.tf"]
    run_on_error = true
  }  
}

locals {
  varfile = "${get_parent_terragrunt_dir()}/${get_env("TG_VAR_FILE")}"
  vardata = local.varfile != null ? jsondecode(file(local.varfile)) : { } # some default
}

