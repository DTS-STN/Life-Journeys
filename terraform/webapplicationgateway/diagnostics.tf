resource "azurerm_log_analytics_workspace" "application-primary-analytics-workspace" {
  name                = "${var.application_name}-analytics-${var.environment}"
  location            = var.location
  resource_group_name = var.network_resource_group
  sku                 = "PerGB2018"
  retention_in_days   = 30
}

resource "azurerm_monitor_diagnostic_setting" "application-primary-analytics" {
  name                       = "${var.application_name}-ag-analytics-${var.environment}"
  target_resource_id         = azurerm_application_gateway.application-gateway-v2-primary.id
  log_analytics_workspace_id = azurerm_log_analytics_workspace.application-primary-analytics-workspace.id
  dynamic "log" {
    for_each = [
      "ApplicationGatewayAccessLog",
      "ApplicationGatewayPerformanceLog",
      "ApplicationGatewayFirewallLog",
    ]
    content {
      category = log.value
      enabled  = true

      retention_policy {
        enabled = true
        days = 30
      }
    }
  }

  dynamic "metric" {
    for_each = [
      "AllMetrics",
    ]
    content {
      category = metric.value
      enabled  = true

      retention_policy {
        enabled = true
        days = 30
      }
    }
  }
}

resource "azurerm_monitor_diagnostic_setting" "application-primary-diagnostics" {
  name                = "${var.application_name}-ag-diagnostics-primary-${var.environment}"
  target_resource_id = azurerm_application_gateway.application-gateway-v2-primary.id
  storage_account_id = var.diagnostic_storage_account_id

  dynamic "log" {
    for_each = [
      "ApplicationGatewayAccessLog",
      "ApplicationGatewayPerformanceLog",
      "ApplicationGatewayFirewallLog",
    ]
    content {
      category = log.value
      enabled  = true

      retention_policy {
        enabled = true
        days = 30
      }
    }
  }

  metric {
    category = "AllMetrics"

    retention_policy {
      enabled = true
      days = 30
    }
  }
}