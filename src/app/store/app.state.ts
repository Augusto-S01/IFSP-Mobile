import { createAction, createReducer, on, props } from "@ngrx/store";
import { IAppState } from "../models/IAppState";
import { INotas } from "../models/INotas";

export const appInitialState: IAppState = {
  notas: JSON.parse(localStorage.getItem('notas') as string) || [],
  contador: JSON.parse(localStorage.getItem('contador') as string) || 0

};


export const criarNota = createAction('[App] Criar Nota', props<{payload: INotas}>());
export const deletarNota = createAction('[App] Deletar Nota', props<{payload: INotas}>());

export const appReducer = createReducer(
  appInitialState,
  on(criarNota, (state, payload) => {
    state = {
      ...state,
      notas: [...state.notas, payload.payload],
      contador: state.contador + 1

    }
    localStorage.setItem('notas', JSON.stringify(state.notas));
    localStorage.setItem('contador', JSON.stringify(state.contador));
    return state;
  }
  ),
  on(deletarNota, (state, payload) => {
    state = {
      ...state,
      notas: state.notas.filter(nota => nota.id !== payload.payload.id)
    }
    localStorage.setItem('notas', JSON.stringify(state.notas));
    return state;
  }
  ),
)


