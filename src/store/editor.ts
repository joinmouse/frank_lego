import { createStore } from "vuex";
import { GlobalDataProps } from "./index";

interface EditorProps {
  components: ComponentData[];
  currentElement: string;
}

interface ComponentData {
  props: {
    [key: string]: any;
  };
  id: string;
  name: string;
}
