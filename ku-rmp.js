//Search query URI for RMP University of Kansas
const RMP_URI = "https://www.ratemyprofessors.com/search.jsp?queryoption=HEADER&queryBy=teacherName&schoolName=University+of+Kansas&schoolID=1117&query=";
const RMP_API = "https://solr-aws-elb-production.ratemyprofessors.com//solr/rmp/select/?solrformat=true&rows=5&wt=json&q={PROFNAME}&rows=5&fq=schoolname_t:%22University%20of%20Kansas%22&fq=schoolid_s:1117"
    //Finds all clickable professors on DOM and updates links
function scrapeProfessors() {
    console.log("Searching for professors...");
    let professorList = document.querySelectorAll('[title="Click here to get instructor info"]');

    if (professorList.length > 0) {
        var xhttp = new XMLHttpRequest();
        console.log(`${professorList.length} professors found:`);

        var professors = [];
        //Create hrefs to professor's RMP page
        console.log("Updating link(s) in DOM");
        for (let i = 0; i < professorList.length; i++) {
            professors[i] = professorList[i].innerHTML;
            professorList[i].href = RMP_URI + professors[i];
            professorList[i].title = `Search RateMyProfessor for ${professors[i]}`;
            // console.log(getProfessorID(professors[i]).data.rmp_id);
        }
        // console.log(professorList);
        // console.log(professors);
    } else {
        console.log("No professors found");
    }
    console.log("Done.");
}

//Setup observer to detect when targetNode changes.
//This gets around reimplementing KU's classes.js functions to implement hooks.
var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
var targetNode = document.getElementById('classes_ajaxDiv');
var callback = function(mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            scrapeProfessors();
            //console.log('A child node has been added or removed.');
        }
        // else if (mutation.type === 'attributes') {
        //     //console.log('The ' + mutation.attributeName + ' attribute was modified.');
        // }
    }
};
var observer = new MutationObserver(callback);
const config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
};
observer.observe(targetNode, config);

//xhttp function to get direct link instead of search query link
// let cache = {};

// function getProfessorID(name, func, errFunc) {
//     if (name in cache) {
//         func(cache[name]);
//     } else {
//         let rmpUrl = RMP_API.replace("{PROFNAME}", name);
//         let xhttp = new XMLHttpRequest();
//         xhttp.open('GET', rmpUrl);
//         xhttp.send();
//         xhttp.onload = function(e) {
//             let jsonResponse = JSON.parse(this.responseText.substring(5, this.responseText.length - 1));
//             console.log(jsonResponse);

//             // No Professor was Found
//             if (jsonResponse.response.docs.length == 0) {
//                 errFunc(toTitleCase(name.replace('+', ' ')));
//                 return;
//             }

//             let data = {
//                 rmp_id: jsonResponse.response.docs[0].pk_id,
//             }
//             cache[name] = data;
//             func(data);
//         }
//     }
// }