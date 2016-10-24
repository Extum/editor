<?php
use Flarum\Event\ConfigureClientView;

$events->listen(ConfigureClientView::class, function (ConfigureClientView $event) {
    if ($event->isForum()) {
        $event->addAssets(__DIR__ . '/js/forum/dist/extension.js');
        $event->addBootstrapper('xengine/markdown-editor/main');
    }
});