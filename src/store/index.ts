import { createStore } from "vuex";
import user, { UserProps } from "./user";
import templates, { TemplatesProps } from "./templates";
import editor, { EditorProps } from "./editor";

// interface
export interface GlobalDataProps {
  user: UserProps;
  templates: TemplatesProps;
  editor: EditorProps;
}

const store = createStore({
  modules: {
    user,
    templates,
    editor,
  },
});

export default store;
