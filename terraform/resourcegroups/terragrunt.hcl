include {
  path = find_in_parent_folders()
}

terraform {
  extra_arguments "common_vars" {
    commands = ["plan", "apply", "import", "destroy" ]
    arguments = local.varfile != null ? ["-var-file=${local.varfile}"] : []
  }

  before_hook "copy_parent_variables" {
    commands     = ["apply", "plan", "import", "destroy" ]
    execute      = ["cp", "../variables.tf", "."]
  }

  after_hook "remove_parent_variables" {
    commands     = ["apply", "plan", "import", "destroy" ]
    execute      = ["rm", "./variables.tf"]
    run_on_error = true
  }  
}

locals {
  varfile = "${get_parent_terragrunt_dir()}/${get_env("TG_VAR_FILE")}"
  vardata = local.varfile != null ? jsondecode(file(local.varfile)) : {  } # some default
  subscription_id = local.vardata.subscription_id
  tenant_id = local.vardata.tenant_id
  client_id = local.vardata.client_id
  client_secret = local.vardata.client_secret
  depot_resource_group = local.vardata.depot_resource_group
  remote_state_storage_account_name = local.vardata.remote_state_storage_account_name
  container_name = local.vardata.application_name

}