import { NgModule } from '@angular/core';
import { ThemeComponent } from './silkRoad.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../auth/_guards/auth.guard";

const routes: Routes = [
    {
        "path": "",
        "component": ThemeComponent,
        "canActivate": [AuthGuard],
        "children": []
    },
    {
        "path": "index",
        "loadChildren": ".\/pages\/home\/home.module"
    },
    {
        "path": "snippets\/pages\/user\/login-2",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/user\/user-login-2\/user-login-2.module#UserLogin2Module"
    },
    {
        "path": "snippets\/pages\/user\/login-3",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/user\/user-login-3\/user-login-3.module#UserLogin3Module"
    },
    {
        "path": "snippets\/pages\/user\/login-4",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/user\/user-login-4\/user-login-4.module#UserLogin4Module"
    },
    {
        "path": "snippets\/pages\/user\/login-5",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/user\/user-login-5\/user-login-5.module#UserLogin5Module"
    },
    {
        "path": "snippets\/pages\/errors\/error-1",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/errors\/errors-error-1\/errors-error-1.module#ErrorsError1Module"
    },
    {
        "path": "snippets\/pages\/errors\/error-2",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/errors\/errors-error-2\/errors-error-2.module#ErrorsError2Module"
    },
    {
        "path": "snippets\/pages\/errors\/error-3",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/errors\/errors-error-3\/errors-error-3.module#ErrorsError3Module"
    },
    {
        "path": "snippets\/pages\/errors\/error-4",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/errors\/errors-error-4\/errors-error-4.module#ErrorsError4Module"
    },
    {
        "path": "snippets\/pages\/errors\/error-5",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/errors\/errors-error-5\/errors-error-5.module#ErrorsError5Module"
    },
    {
        "path": "snippets\/pages\/errors\/error-6",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/errors\/errors-error-6\/errors-error-6.module#ErrorsError6Module"
    },
    {
        "path": "**",
        "redirectTo": "404",
        "pathMatch": "full"
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }