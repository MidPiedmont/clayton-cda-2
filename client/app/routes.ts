import { 
    type RouteConfig, 
    index, 
    layout, 
    route 
} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    // Example route to hold onto to figure out param routing
    route("post/:postID", "routes/post.tsx"),

    // Assistant Routes
    route("Assistant", "routes/assistant.tsx"),
    layout("routes/assistant/layout.tsx", [
        route("LicenseAssistant", "routes/assistant/license.tsx"),
        route("PermitAssistant", "routes/assistant/permit.tsx"),
        route("ZoningAssistant", "routes/assistant/zoning.tsx"),
    ]),

    // End Page Routes
    layout("routes/endpage/layout.tsx", [
        route("LicenseRequirements/:id", "routes/endpage/license.tsx"),
        route("PermitRequirements/:id", "routes/endpage/permit.tsx"),
        route("ZoningRequirements/:id", "routes/endpage/zoning.tsx"),
    ])

    // If you were to change the top-level route in those route blocks above from
    // 'route' to 'layout', you could run each of arrayed routes not as base routes, 
    // using the ref'd file in the layout call as the layout
    // Note: layouts aren't routes, so they do not accepot routes as params
] satisfies RouteConfig;
