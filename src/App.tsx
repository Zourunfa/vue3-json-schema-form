import { defineComponent, reactive, render, ref, Ref } from "vue";
import MonacoEditor from "./components/MonacoEditor";
import { createUseStyles } from "vue-jss";

const useStyles = createUseStyles({
  editor: {
    minHeight: 400,
  },
});

function toJson(data: any) {
  return JSON.stringify(data, null, 2);
}

const schema = {
  type: "string",
};

export default defineComponent({
  setup() {
    const classesRef = useStyles();
    const schemaRef: Ref<any> = ref(schema);
    const handleCodeChange = (code: string) => {
      let schema: any;
      try {
        schema = JSON.parse(code);
      } catch (err) {
        schemaRef.value = schema;
      }
    };

    return () => {
      const code = toJson(schemaRef.value);
      const classes = classesRef.value;
      return (
        <div>
          <MonacoEditor
            class={classes.editor}
            code={code}
            onChange={handleCodeChange}
            title="afSchema"
          />
        </div>
      );
    };
  },
});
