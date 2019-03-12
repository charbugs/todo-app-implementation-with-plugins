import ExtensibleTodoApp from '@charbugs/extensible-todo-app';
import TodoTrashPlugin from '@charbugs/todo-trash-plugin';
import UpperCasePlugin from '@charbugs/upper-case-plugin';
import ToggleEditorPlugin from '@charbugs/toggle-editor-plugin';

ExtensibleTodoApp.init('app', [
  TodoTrashPlugin,
  UpperCasePlugin,
  ToggleEditorPlugin
]);
