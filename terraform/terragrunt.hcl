generate "provider" {
  path = "provider.tf"
  if_exists = "overwrite_terragrunt"
  contents = <<EOF
provider "azurerm" {
    subscription_id = var.subscription_id
    tenant_id = var.tenant_id
    client_id = var.client_id
    client_secret = var.client_secret
    features {}
}
terraform {
  backend "azurerm" {}
}
EOF
}

locals {
  varfile = get_env("TG_VAR_FILE")
  vardata = local.varfile != null ? jsondecode(file(local.varfile)) : {  } # some default

  depot_resource_group = local.vardata.tfstate_storage_rg
  remote_state_storage_account_name = local.vardata.remote_state_storage_account_name
  container_name = local.vardata.application_name

}

# REMOTE STATE
remote_state {
    backend = "azurerm"
    config = {
        key = "${path_relative_to_include()}/terraform.tfstate"
        resource_group_name = local.depot_resource_group
        storage_account_name = local.remote_state_storage_account_name
        container_name = local.container_name
    }
}



terraform {
  extra_arguments "common_vars" {
    commands = ["plan", "apply", "import", "destroy" ]
    arguments = local.varfile != null ? ["-var-file=${local.varfile}"] : []
  }
}
