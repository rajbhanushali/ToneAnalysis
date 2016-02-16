	var ec = document.getElementById("EmotionChart").getContext("2d");
    var wr = document.getElementById("WritingChart").getContext("2d");
    var sc = document.getElementById("SocialChart").getContext("2d");

    var emotion = JSON.parse(localStorage.getItem('emotions'));
    var writing = JSON.parse(localStorage.getItem('writing'));
    var social = JSON.parse(localStorage.getItem('social'));

    var emotionsum = emotion[0] + emotion[1] + emotion[2];
    emotion[0] /= emotionsum;
    emotion[1] /= emotionsum;
    emotion[2] /= emotionsum;

    var writingsum = writing[0]+ writing[1] + writing[2];
    writing[0] /= writingsum;
    writing[1] /= writingsum;
    writing[2] /= writingsum;

    var socialsum = social[0] + social[1] + social[2];
    social[0] /= socialsum;
    social[1] /= socialsum;
    social[2] /= socialsum;


    var emotiondata = [

    {
        value: Math.round(emotion[0]*100), //anger
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Anger"
    },
    {
        value: Math.round(emotion[1]*100), //cheerfulness
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Cheerfulness"
    },
    {
        value: Math.round(emotion[2]*100), //negative
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Negativity"
    }
                        ];

    var writingdata = [

    {
        value: Math.round(writing[0]*100), //agreeablenes
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Agreeableness"
    },
    {
        value: Math.round(writing[1]*100), //consceintous
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Conscientious"
    },
    {
        value: Math.round(writing[2]*100), //openness
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Openness"
    }
                        ];

    var socialdata = [

    {
        value: Math.round(social[0]*100), //anlytical
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Analytical"
    },
    {
        value: Math.round(social[1]*100), //confident
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Confident"
    },
    {
        value: Math.round(social[2]*100), //tentative
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Tentative"
    }
                        ];          

  var myPieChart = new Chart(ec).Pie(emotiondata);
  var myPieChart2 = new Chart(wr).Pie(writingdata);
  var myPieChart3 = new Chart(sc).Pie(socialdata);
