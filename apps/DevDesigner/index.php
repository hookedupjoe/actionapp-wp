<?php
/**
 * Developer Designer - Sub Application
 */

?>


<!DOCTYPE html>
<html>

<head>
  <meta name="format-detection" content="telephone=no">
  <meta name="msapplication-tap-highlight" content="no">
  <meta name="viewport"
    content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
    <?php 
    wp_head(); ?>
    
    <base href="<?php echo ACTIONAPP_WP_URL . '/apps/DevDesigner/' ?>" >



  <link rel="stylesheet" href="<?php echo ACTIONAPP_WP_CORE_LIB_URL ?>/built-lib/support-libs.css">

  <!-- OPTIONAL - Data-tables -->
  <!-- <link rel="stylesheet" href="/lib/datatables/datatables.min.css"> -->
  <!-- <link rel="stylesheet" href="/lib/datatables/responsive.custom.css"> -->
  <!-- <link rel="stylesheet" href="/lib/jsTree/themes/default/style.min.css" /> -->





  <!-- Local app css -->
  <link rel="stylesheet" href="<?php echo ACTIONAPP_WP_URL ?>/apps/DevDesigner/app/css/app.css">
  <style>
    .subdemo1 {
      color: red;
    }
  </style>
  <title>ActionApp Developer Console</title>
</head>

<body>
  <div appuse="side-menu" class="ui sidebar right inverted labeled icon left inline vertical menu">
  </div>
  <div class="site-layout-north" style="background-color:#2b3443;">
    <div style="padding:0px;" class="">

      <a style="float:right;margin-left:4px;margin-top:5px;" semaction="showsidebar" class="toc item">
        <i class="sidebar icon big inverted"></i>
      </a>
      <div style="float:left;margin-left:5px;padding:5px;margin-top:3px;line-height:25px;" class="site-header">
      ActionApp Developer Console    
      </div>
      <div style="float:right;padding:0;margin:0;margin-right:10px;margin-left:10px;" appuse="nav-menu"
        class="ui pointing inverted menu nomobile"></div>
    </div>
  </div>

  <div appuse="app-loader"><i class="huge icons"><i class="big loading circle notch icon"></i></i></div>
  <div appuse="main-page-container" class="site-layout-center pusher"></div>
  <div appuse="site:global-context-menu"></div>
  
  <!--   End of page *****************************************  -->

  <!-- <script src="/plugins/web-controls-plugin.js"></script> -->
  <!-- <script src="/plugins/svg-controls-plugin.js"></script> -->

  <!-- Action App Plugins -->

  <!-- OPTIONAL - Data-tables -->
  <!-- <script src="/plugins/jquery-datatables-helper.js"></script>
  <script src="/plugins/datatables-plugin.js"></script> -->

  <!-- OPTIONAL - Dev-Libraries -->
  <script src="<?php echo ACTIONAPP_WP_CORE_LIB_URL ?>/lib/ace/ace.js"></script>
  <script src="<?php echo ACTIONAPP_WP_CORE_LIB_URL ?>/lib/ace/ext-language_tools.js"></script>
  <script src="<?php echo ACTIONAPP_WP_CORE_LIB_URL ?>/lib/ace/ext-beautify.js"></script>

  <!-- Application Launch Script -->
  <script src="<?php echo ACTIONAPP_WP_URL ?>/apps/DevDesigner/app/app.js"></script>

<script>
ActionAppCore.wp_siteInfo = <?php echo( wp_json_encode(get_blog_details()) ); ?>;
</script>

</body>

</html>