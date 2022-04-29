// import { CanActivate, ExecutionContext } from "@nestjs/common";
// import { Observable } from "rxjs";
// import { Reflector } from "@nestjs/core";
// import { ROLESKEY } from "./roles.decorator";
//
// export class RolesGuard implements CanActivate {
//   constructor(private reflector: Reflector) {
//   }
//
//
//   canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
//     try {
//       const requiredRoles = this.reflector.getAllAndOverride(ROLESKEY, [context.getHandler, context.getClass])
//       if (!requiredRoles) {
//         return true
//       }
//
//
//     }
//     catch (e) {
//
//     }
//   }
//
//
// }