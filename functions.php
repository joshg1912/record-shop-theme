<?php 
function record_shop_files() {
    wp_enqueue_script('record_shop_javascript', get_theme_file_uri('/src/main.js'))
    wp_enqueue_style('record_shop_styles', get_theme_file_uri('/css/style.css'));
    wp_enqueue_style('record_shop_bootstrap', '//cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css');
}

add_action('wp_enqueue_scripts', 'record_shop_files');

?>