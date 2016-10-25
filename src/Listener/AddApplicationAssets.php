<?php
namespace XEngine\MarkdownEditor\Listener;

use Flarum\Event\ConfigureWebApp;
use Illuminate\Contracts\Events\Dispatcher;

class AddApplicationAssets{

    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureWebApp::class, [$this, 'addAssets']);
    }

    public function addAssets(ConfigureWebApp $event)
    {
        if ($event->isForum()) {
            $event->addAssets([
                __DIR__.'/../../js/forum/dist/extension.js',
                __DIR__.'/../../js/forum/dist/simplemde.js',
               // __DIR__.'/../../less/forum/extension.less',
            ]);
            $event->addBootstrapper('xengine/mdeditor/main');
        }
    }
}