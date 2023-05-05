import { useEffect } from "react";

const cancel = (scriptList: string[]) => {
    scriptList.forEach((a) => {
        let script = document.querySelector('script[src="' + a + '"]');
        if (script) document.body.removeChild(script);
    });
}

const loadScript = () => {
    useEffect(() => {

        let scriptList = [
            "/src/assets/plugins/global/plugins.bundle.js",
            "/src/assets/js/scripts.bundle.js",
            "/src/assets/plugins/custom/fullcalendar/fullcalendar.bundle.js",
            "https://cdn.amcharts.com/lib/5/index.js",
            "https://cdn.amcharts.com/lib/5/xy.js",
            "https://cdn.amcharts.com/lib/5/percent.js",
            "https://cdn.amcharts.com/lib/5/radar.js",
            "https://cdn.amcharts.com/lib/5/themes/Animated.js",
            "https://cdn.amcharts.com/lib/5/map.js",
            "https://cdn.amcharts.com/lib/5/geodata/worldLow.js",
            "https://cdn.amcharts.com/lib/5/geodata/continentsLow.js",
            "https://cdn.amcharts.com/lib/5/geodata/usaLow.js",
            "https://cdn.amcharts.com/lib/5/geodata/worldTimeZonesLow.js",
            "https://cdn.amcharts.com/lib/5/geodata/worldTimeZoneAreasLow.js",
            "/src/assets/plugins/custom/datatables/datatables.bundle.js",
            "/src/assets/js/widgets.bundle.js",
            "/src/assets/js/custom/widgets.js",
            "/src/assets/js/custom/apps/chat/chat.js",
            "/src/assets/js/custom/utilities/modals/upgrade-plan.js",
            "/src/assets/js/custom/utilities/modals/create-app.js",
            "/src/assets/js/custom/utilities/modals/users-search.js",
            "/src/assets/js/script.js",
            //Define script names to load
        ];

        scriptList.forEach(function (a) {
            //loop to iterate over each script file.
            let script = document.createElement("script"); //creating <script> element
            script.src = a;
            script.type = "application/javascript";
            script.async = false;
            script.defer = false;
            document.body.appendChild(script);
        });


        return () => cancel(scriptList);
    }, []);

}

export default loadScript;


//<script>var hostUrl = "assets/";</script>
