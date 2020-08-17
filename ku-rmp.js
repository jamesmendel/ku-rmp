//Search query URI for RMP University of Kansas
const RMP_URI = "https://www.ratemyprofessors.com/search.jsp?queryoption=HEADER&queryBy=teacherName&schoolName=University+of+Kansas&schoolID=1117&query=";
const RMP_API = "https://solr-aws-elb-production.ratemyprofessors.com//solr/rmp/select/?solrformat=true&rows=5&wt=json&q={PROFNAME}&rows=5&fq=schoolname_t:%22University%20of%20Kansas%22&fq=schoolid_s:1117"
    //Finds all clickable professors on DOM and updates links
function scrapeProfessors() {
    console.log("Searching for professors...");
    let professorList = document.querySelectorAll('[title="Click here to get instructor info"]');

    if (professorList.length > 0) {
        console.log(`${professorList.length} professors found:`);

        var profs = [];
        //Create hrefs to professor's RMP page
        console.log("Updating link(s) in DOM");
        for (let i = 0; i < professorList.length; i++) {
            profs[i] = professorList[i].innerHTML.split(", ");
            let prof_query = profs[i][1] + "+" + profs[i][0];
            let prof_name = profs[i][1] + " " + profs[i][0];
            professorList[i].href = RMP_URI + prof_query;
            professorList[i].title = `Search RateMyProfessor for ${prof_name}`;
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
