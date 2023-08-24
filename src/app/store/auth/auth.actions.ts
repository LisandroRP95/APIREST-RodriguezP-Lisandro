import { createActionGroup, props } from "@ngrx/store";
import { User } from "src/app/dashboard/pages/users/models";

export const authActions = createActionGroup({
    source: 'Auth',
    events: {
        'setAuthUser': props<{ payload: User | null }>()
    }
})