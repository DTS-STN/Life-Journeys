resource "azurerm_application_gateway" "application-gateway-v2-primary" {
  name                = "ag-v2-primary"
  resource_group_name = var.network_resource_group
  location            = var.location
  enable_http2        = true


  sku {
    name     = "WAF_v2"
    tier     = "WAF_v2"
    capacity = 2
  }

  waf_configuration {
    enabled          = "true"
    firewall_mode    = "Prevention"
    rule_set_type    = "OWASP"
    rule_set_version = "3.0"
    disabled_rule_group {
      rule_group_name = "REQUEST-931-APPLICATION-ATTACK-RFI"
      rules = [931130]
    }
    disabled_rule_group {
      rule_group_name = "REQUEST-941-APPLICATION-ATTACK-XSS"
      rules = [941150,941330,941340]
    }
    disabled_rule_group {
      rule_group_name = "REQUEST-942-APPLICATION-ATTACK-SQLI"
      rules = [942190,942200,942260,942340,942430,942330,942370]
    }
  }

  gateway_ip_configuration {
    name      = "subnet"
    subnet_id = var.subnet_id
  }

  frontend_port {
    name = "https"
    port = 443
  }

  frontend_port {
    name = "http"
    port = 80
  }

  frontend_ip_configuration {
    name                 = "frontend"
    public_ip_address_id = var.public_ip_id_primary
  }

  backend_address_pool {
    name        = "${var.application_name}ApplicationPool"
    fqdns       = [var.primary_application_appservice_hostname]
  }

  backend_address_pool {
    name        = "${var.application_name}ApiPool"
    fqdns       = [var.primary_api_appservice_hostname]
  }

  backend_address_pool {
    name        = "${var.application_name}AdminPool"
    fqdns       = [var.primary_admin_appservice_hostname]
  }

  http_listener {
    name                           = "${var.application_name}ApiListener"
    frontend_ip_configuration_name = "frontend"
    frontend_port_name             = "https"
    protocol                       = "Https"
    ssl_certificate_name           = "dts-stn-wildcard"
    host_name                      = var.api_url
    require_sni                    = "true"
  }
  http_listener {
    name                           = "${var.application_name}ApiHTTPListener"
    frontend_ip_configuration_name = "frontend"
    frontend_port_name             = "http"
    protocol                       = "Http"
    host_name                      = var.api_url
    require_sni                    = false
  }

  http_listener {
    name                           = "${var.application_name}ApplicationListener"
    frontend_ip_configuration_name = "frontend"
    frontend_port_name             = "https"
    protocol                       = "Https"
    ssl_certificate_name           = "dts-stn-wildcard"
    host_name                      = var.application_url
    require_sni                    = "true"
  }
  http_listener {
    name                           = "${var.application_name}ApplicationHTTPListener"
    frontend_ip_configuration_name = "frontend"
    frontend_port_name             = "http"
    protocol                       = "Http"
    host_name                      = var.application_url
    require_sni                    = false
  }

  http_listener {
    name                           = "${var.application_name}AdminListener"
    frontend_ip_configuration_name = "frontend"
    frontend_port_name             = "https"
    protocol                       = "Https"
    ssl_certificate_name           = "dts-stn-wildcard"
    host_name                      = var.admin_url
    require_sni                    = "true"
  }
  http_listener {
    name                           = "${var.application_name}AdminHTTPListener"
    frontend_ip_configuration_name = "frontend"
    frontend_port_name             = "http"
    protocol                       = "Http"
    host_name                      = var.admin_url
    require_sni                    = false
  }

  ssl_certificate {
    name     = "dts-stn-wildcard"
    data     = var.domain_wildcard
  }

  probe {
    name                = "application-probe"
    protocol            = "https"
    path                = var.healthcheck_page
    host                = var.primary_application_appservice_hostname
    interval            = "30"
    timeout             = "30"
    unhealthy_threshold = "3"
  }

  probe {
    name                = "api-probe"
    protocol            = "https"
    path                = var.healthcheck_page
    host                = var.primary_api_appservice_hostname
    interval            = "30"
    timeout             = "30"
    unhealthy_threshold = "3"
  }

  probe {
    name                = "admin-probe"
    protocol            = "https"
    path                = var.healthcheck_page
    host                = var.primary_admin_appservice_hostname
    interval            = "30"
    timeout             = "30"
    unhealthy_threshold = "3"
  }

  backend_http_settings {
    name                  = "application-https"
    cookie_based_affinity = "Disabled"
    port                  = 443
    protocol              = "Https"
    request_timeout       = 1
    probe_name            = "application-probe"
    pick_host_name_from_backend_address = true
    affinity_cookie_name  = "ApplicationGatewayAffinity"
  }

  backend_http_settings {
    name                  = "api-https"
    cookie_based_affinity = "Disabled"
    port                  = 443
    protocol              = "Https"
    request_timeout       = 1
    probe_name            = "api-probe"
    pick_host_name_from_backend_address = true
    affinity_cookie_name  = "ApplicationGatewayAffinity"
  }

  backend_http_settings {
    name                  = "admin-https"
    cookie_based_affinity = "Disabled"
    port                  = 443
    protocol              = "Https"
    request_timeout       = 1
    probe_name            = "admin-probe"
    pick_host_name_from_backend_address = true
    affinity_cookie_name  = "ApplicationGatewayAffinity"
  }

  rewrite_rule_set {
    name = "CORS"
    rewrite_rule {
      name = "allow-origin"
      rule_sequence = 100
      response_header_configuration {
        header_name  = "Access-Control-Allow-Origin"
        header_value = "*"
      }
    }
  }

  redirect_configuration {
    name                       = "${var.application_name}ApplicationHTTPRule"
    include_path               = "true"
    include_query_string       = "true"
    target_listener_name       = "${var.application_name}ApplicationListener"
    redirect_type              = "Permanent"
  }
  request_routing_rule {
    name                       = "${var.application_name}ApplicationHTTPRule"
    http_listener_name         = "${var.application_name}ApplicationHTTPListener"
    redirect_configuration_name = "${var.application_name}ApplicationHTTPRule"
    rule_type                   = "Basic"
  }
  request_routing_rule {
    name                       = "${var.application_name}ApplicationRule"
    rule_type                  = "Basic"
    http_listener_name         = "${var.application_name}ApplicationListener"
    backend_address_pool_name  = "${var.application_name}ApplicationPool"
    backend_http_settings_name = "application-https"
    rewrite_rule_set_name = "CORS"
  }


  redirect_configuration {
    name                       = "${var.application_name}ApiHTTPRule"
    include_path               = "true"
    include_query_string       = "true"
    target_listener_name       = "${var.application_name}ApiListener"
    redirect_type              = "Permanent"
  }
  request_routing_rule {
    name                       = "${var.application_name}ApiHTTPRule"
    http_listener_name         = "${var.application_name}ApiHTTPListener"
    redirect_configuration_name = "${var.application_name}ApiHTTPRule"
    rule_type                   = "Basic"
  }
  request_routing_rule {
    name                       = "${var.application_name}ApiRule"
    rule_type                  = "Basic"
    http_listener_name         = "${var.application_name}ApiListener"
    backend_address_pool_name  = "${var.application_name}ApiPool"
    backend_http_settings_name = "api-https"
    rewrite_rule_set_name = "CORS"
  }


  redirect_configuration {
    name                       = "${var.application_name}AdminHTTPRule"
    include_path               = "true"
    include_query_string       = "true"
    target_listener_name       = "${var.application_name}AdminListener"
    redirect_type              = "Permanent"
  }
  request_routing_rule {
    name                       = "${var.application_name}AdminHTTPRule"
    http_listener_name         = "${var.application_name}AdminHTTPListener"
    redirect_configuration_name = "${var.application_name}AdminHTTPRule"
    rule_type                   = "Basic"
  }
  request_routing_rule {
    name                       = "${var.application_name}AdminRule"
    rule_type                  = "Basic"
    http_listener_name         = "${var.application_name}AdminListener"
    backend_address_pool_name  = "${var.application_name}AdminPool"
    backend_http_settings_name = "admin-https"
    rewrite_rule_set_name = "CORS"
  }


}