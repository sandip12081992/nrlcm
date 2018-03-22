import { IFilter } from "../infrastructure/IFilter";
import { HttpContext } from "../infrastructure/http-context";
import { RouteDescriptor } from "../infrastructure/route-descriptor";

export class Test1Filter implements IFilter {
    public beforeActionExceduted(httpContext: HttpContext, routeDescriptor: RouteDescriptor): void {
        console.log("beforeActionExceduted", httpContext.user, routeDescriptor);
    }

    public aftereActionExceduted(httpContext: HttpContext, routeDescriptor: RouteDescriptor): void {
        console.log("aftereActionExceduted", httpContext.user, routeDescriptor);
    }
}