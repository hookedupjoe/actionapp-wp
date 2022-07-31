<?php
/**
 * Action App Designer - Template - Login entrypoint for popup dialog
 * 
 * Copyright (c) 2021-2022 Joseph Francis / hookedup, inc. 
 *
 * This code is released under the GNU General Public License.
 * See COPYRIGHT.txt and LICENSE.txt.
 *
 * This code is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * This header and all notices must be kept intact.
 *
 * @author Joseph Francis
 * @package actionappwp
 * @since actionappwp 1.0.0
 */
function dequeue_my_css() {
    wp_dequeue_style('dashicons');
    wp_dequeue_style('admin-bar');
    wp_dequeue_style('wp-block-library');
}
add_action('wp_enqueue_scripts','dequeue_my_css',10);

remove_action('wp_head', '_admin_bar_bump_cb');
$tmpStatus = $_GET['status'];
$tmpRoot = ActAppCommon::getRootPath();

if( $tmpStatus == 'done'){
    $tmpForm = '<div class="ui segment">Log in successful</div>';
    
} else {
    $tmpForm = '<div class="ui segment"><div class="ui header blue medium">Log in</div>
    <div class="ui message small blue">Your session timed out</div>
    <form class="ui form" name="loginform" id="loginform" action="'.$tmpRoot.'/wp-login.php" method="post"><p class="login-username">
        <label for="user_login">Username or Email Address</label>
        <input type="text" name="log" id="user_login" autocomplete="username" class="input" value="" size="20">
        </p><p class="login-password">
        <label for="user_pass">Password</label>
        <input type="password" name="pwd" id="user_pass" autocomplete="current-password" class="input" value="" size="20">
        </p><p class="login-remember"><label><input name="rememberme" type="checkbox" id="rememberme" value="forever" checked="checked"> Remember Me</label></p><p class="login-submit">
        <input type="submit" name="wp-submit" id="wp-submit" class="button button-primary" value="Log In">
        <input type="hidden" name="redirect_to" value="'.$tmpRoot.'/actappdesign/login/?status=done">
        </p>
        </form></div>
        ';
    
}

?>

<!DOCTYPE html>
<html>

<head>
  <meta name="format-detection" content="telephone=no">
  <meta name="msapplication-tap-highlight" content="no">
  <meta name="viewport"
    content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
    <?php wp_head(); ?>
</head>
<body>
<?php echo($tmpForm); ?>
</body>
</html>

