import { extend } from 'flarum/extend';
import app from 'flarum/app';

app.initializers.add('xengine-mdeditor', () => {
    alert('Hello, world!');
});