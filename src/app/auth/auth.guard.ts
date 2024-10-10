import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from './token.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
    const tokenService = inject(TokenService);
    const router = inject(Router);

    return tokenService.isAuth.pipe(
        map((isAuth: any) => {
            return isAuth ? true : router.createUrlTree(['/auth']);
        })
    );
};
