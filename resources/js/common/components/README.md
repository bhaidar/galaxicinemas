### Notes

Anything variable that can be edited in the UI is represented by an editor, which is made up of "base" editors (like number, string, boolean, etc). They are intended to be very simple:

1) provide a model (value);
2) emit changes;

The logic of what to do with those changes should be handled outside of the editor. All validation should be handled within editor.
