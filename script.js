var saveBtn = document.getElementById("save-contact");
saveBtn.addEventListener("click", function () {



    var vcard = "BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=UTF-8:\nN: Fernandez;Guillermo;Cobelo;\nTEL;TYPE=CELL:+971501064340\nTEL;TYPE=CELL:+97126654092\nEMAIL:gcobelo@tecnicasunidas.es\nORG:Tecnicas Reunidas\nTITLE:Chief Institutional Relations Officer & Global Head of Commercial Affairs\nADR; TYPE = WORK: ;;; Abudhabi;United Arab Emirates;;\nTITLE:\nREV:Wed Mar 30 2024 12: 55: 50 GMT + 0400(Gulf Standard Time)\nEND:VCARD";

    var blob = new Blob([vcard], { type: "text/vcard" });
    var url = URL.createObjectURL(blob);

    const newLink = document.createElement('a');
    newLink.download = "Guillermo Cobelo Fernandez" + ".vcf";
    newLink.textContent = "Guillermo Cobelo Fernandez";
    newLink.href = url;



    newLink.click();
});


function clearCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
}