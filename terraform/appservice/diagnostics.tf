resource "azurerm_monitor_diagnostic_setting" "as-primary-diagnostics" {
  name               = "diagnostics-${var.environment}-${var.location}"
  target_resource_id = azurerm_app_service.app-service-primary.id
  storage_account_id = var.diagnostic_storage_account_id



log {
    category = "AppServiceAntivirusScanAuditLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }

log {
    category = "AppServiceHTTPLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }  
log {
    category = "AppServiceConsoleLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }  
log {
    category = "AppServiceAppLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }

log {
    category = "AppServiceFileAuditLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }  
log {
    category = "AppServiceAuditLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }    
log {
    category = "AppServiceIPSecAuditLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }  
log {
    category = "AppServicePlatformLogs"
    enabled  = true

    retention_policy {
      enabled = true
    }
  }      

  metric {
    category = "AllMetrics"

    retention_policy {
      enabled = true
    }
  }
}