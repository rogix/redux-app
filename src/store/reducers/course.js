const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando com React: ",
      lessons: [
        { id: 1, title: " Aula react 1" },
        { id: 2, title: " Aula react 2" },
        { id: 3, title: " Aula react 3" },
        { id: 4, title: " Aula react 4" },
        { id: 5, title: " Aula react 5" }
      ]
    },
    {
      id: 2,
      title: "Iniciando com Redux: ",
      lessons: [
        { id: 1, title: "Aula Redux 1" },
        { id: 2, title: "Aula Redux 2" },
        { id: 3, title: "Aula Redux 3" },
        { id: 4, title: "Aula Redux 4" },
        { id: 5, title: "Aula Redux 5" }
      ]
    }
  ]
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module
    };
  }
  return state;
}
