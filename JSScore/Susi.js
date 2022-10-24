

function scholarshipGubun() {

    let
    scholaship4 = document.getElementById('rdoScholarship4'),
    selType1 = document.getElementById('rdoSelType1'),
    selType2 = document.getElementById('rdoSelType2'),
    selType6 = document.getElementById('rdoSelType6'),
    selType7 = document.getElementById('rdoSelType7'),
    selType8 = document.getElementById('rdoSelType8');


    //검정고시일 때 숨겨야하는 항목
    if (scholaship4.checked) {
        selType1.parentElement.style.display = 'none';
        selType2.parentElement.style.display = 'none';
        selType6.parentElement.style.display = 'none';
        selType8.parentElement.style.display = 'none';
        document.getElementById('divResult1').style.display = 'none';
        document.getElementById('divResult2').style.display = 'none';
        document.getElementById('divResult3').style.display = 'block';

        document.getElementById('scoreInput1').style.display = 'none';
        document.getElementById('scoreInput2').style.display = 'none';
        document.getElementById('scoreInput3').style.display = 'none';
        document.getElementById('scoreInput4').style.display = 'none';
        document.getElementById('scoreInput5').style.display = 'block';

        //실기 전형
        if (selType7.checked) {
            document.getElementById('divResult1').style.display = 'none';
            document.getElementById('divResult2').style.display = 'block';
        }
    }
    //그 외일 때의 고정 항목 및 조건 별 항목 구분
    else {
        selType1.parentElement.style.display = 'block';
        selType2.parentElement.style.display = 'block';
        selType6.parentElement.style.display = 'block';
        selType8.parentElement.style.display = 'block';
        document.getElementById('divResult3').style.display = 'none';
        document.getElementById('scoreInput5').style.display = 'none';

        if (document.getElementById('rdoScholarship1').checked) {
            document.getElementById('scoreInput1').style.display = 'block';
            document.getElementById('scoreInput2').style.display = 'none';
            document.getElementById('scoreInput3').style.display = 'block';
            document.getElementById('scoreInput4').style.display = 'block';
        } else if (document.getElementById('rdoScholarship2').checked) {
            document.getElementById('scoreInput1').style.display = 'block';
            document.getElementById('scoreInput2').style.display = 'none';
            document.getElementById('scoreInput3').style.display = 'none';
            document.getElementById('scoreInput4').style.display = 'block';
        } else if (document.getElementById('rdoScholarship3').checked) {
            document.getElementById('scoreInput1').style.display = 'none';
            document.getElementById('scoreInput2').style.display = 'block';
            document.getElementById('scoreInput3').style.display = 'none';
            document.getElementById('scoreInput4').style.display = 'none';

            if (selType8.checked) {
                document.getElementById('scoreInput4').style.display = 'block';
            }
        }

        //실기, 특기자 전형
        if (selType7.checked || selType8.checked) {
            document.getElementById('divResult1').style.display = 'none';
            document.getElementById('divResult2').style.display = 'block';
        } else {
            document.getElementById('divResult1').style.display = 'block';
            document.getElementById('divResult2').style.display = 'none';
        }
    }
}

function onlyNumber(event) {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        return true;
    } else {
        return false;
    }
}

function AddRow(rowType) {
    //하고십은거,, 내용 복사 안되게 하기,,,
    let rowCount1 = document.getElementsByClassName('rowCount1');
    let rowCount2 = document.getElementsByClassName('rowCount2');
    let rowCount3 = document.getElementsByClassName('rowCount3');

    if (rowType == 1) {
        let scoreDiv1 = document.getElementById('rowPlus1');
        let newSD1 = scoreDiv1.cloneNode(true); //true,false는 자식들까지 전부 복사하는가 아닌가
        let rowEnd1 = rowCount1[rowCount1.length - 1];
        // newSD1.id = 'tb1_addRow' <-요거는 아이디 바꾸는거
        rowEnd1.after(newSD1);

    } else if (rowType == 2) {
        let scoreDiv2 = document.getElementById('rowPlus2');
        let newSD2 = scoreDiv2.cloneNode(true);
        let rowEnd2 = rowCount2[rowCount2.length - 1];
        rowEnd2.after(newSD2);

    } else if (rowType == 3) {
        let scoreDiv3 = document.getElementById('rowPlus3');
        let newSD3 = scoreDiv3.cloneNode(true);
        let rowEnd3 = rowCount3[rowCount3.length - 1];
        rowEnd3.after(newSD3);
    }
}

function RemvoeRowTRG(removeTarget, rowType) {
    let rowCount1 = document.getElementsByClassName('rowCount1');
    let rowCount2 = document.getElementsByClassName('rowCount2');
    let rowCount3 = document.getElementsByClassName('rowCount3');

    if (rowType == 1) {
        if (rowCount1.length == 1) return;
        removeTarget.parentElement.parentElement.parentElement.remove();
    }

    if (rowType == 2) {
        if (rowCount2.length == 1) return;
        removeTarget.parentElement.parentElement.remove();
    }

    if (rowType == 3) {
        if (rowCount3.length == 1) return;
        removeTarget.parentElement.parentElement.parentElement.remove();
    }
}

//★ 함수 이름은... 누구라도 알아볼 수 있도록 짓기... :)...
function seongJeok1() {

    selType7 = document.getElementById('rdoSelType7'),
    selType8 = document.getElementById('rdoSelType8');

    let rowCount1 = document.getElementsByClassName('rowCount1');
    let rowCount3 = document.getElementsByClassName('rowCount3');

    let koreanTot = 0;
    let englishTot = 0;
    let mathTot = 0;
    let socialTot = 0;
    let scienceTot = 0;
    let isuTot = 0;
    let inmunIsuTot = 0;
    let natuIsuTot = 0;
    let jayuisuTot = 0;

    for(let i = 0; i < rowCount1.length; i++) {
        let subCheck = rowCount1[i].querySelector('#cboSubject_1');
        let subject1 = subCheck.options[subCheck.selectedIndex].text;

        let grade1 = rowCount1[i].querySelector('#txtGrade1_1');
        let unit1 = rowCount1[i].querySelector('#txtUnit1_1');

        let grade2 = rowCount1[i].querySelector('#txtGrade2_1');
        let unit2 = rowCount1[i].querySelector('#txtUnit2_1');

        //우리 제발 그만 보면 안될까 지긋지긋한 0처리 :)...
        if (grade1.value == null || grade1.value == "") {
            grade1 = 0;
        }
        if (unit1.value == null || unit1.value == "") {
            unit1 = 0;
        }
        if (grade2.value == null || grade2.value == "") {
            grade2 = 0;
        }
        if (unit2.value == null || unit2.value == "") {
            unit2 = 0;
        }

        console.log(grade1.value);
        console.log(grade2.value);
        console.log(unit1.value);
        console.log(unit2.value);

        //과목별 계산
        if (subject1 == "국어") {
            koreanTot = koreanTot + (Number(grade1.value ?? 0) * Number(unit1.value ?? 0) + Number(grade2.value ?? 0) * Number(unit2.value ?? 0));

            //공통이수단위 계산
            isuTot = isuTot + (Number(grade1.value ?? 0) + Number(grade2.value ?? 0));
        } else if (subject1 == "영어") {
            englishTot = englishTot + (Number(grade1.value ?? 0) * Number(unit1.value ?? 0) + Number(grade2.value ?? 0) * Number(unit2.value ?? 0));

            //공통이수단위 계산
            isuTot = isuTot + (Number(grade1.value ?? 0) + Number(grade2.value ?? 0));
        } else if (subject1 == "수학") {
            mathTot = mathTot + (Number(grade1.value ?? 0) * Number(unit1.value ?? 0) + Number(grade2.value ?? 0) * Number(unit2.value ?? 0));

            //공통이수단위 계산
            isuTot = isuTot + (Number(grade1.value ?? 0) + Number(grade2.value ?? 0));
        } else if (subject1 == "사회") {
            socialTot = socialTot + (Number(grade1.value ?? 0) * Number(unit1.value ?? 0) + Number(grade2.value ?? 0) * Number(unit2.value ?? 0));

            //인문이수단위 계산
            inmunIsuTot = inmunIsuTot + (Number(grade1.value ?? 0) + Number(grade2.value ?? 0));
        } else if (subject1 == "과학") {
            scienceTot = scienceTot + (Number(grade1.value ?? 0) * Number(unit1.value ?? 0) + Number(grade2.value ?? 0) * Number(unit2.value ?? 0));

            //자연이수단위 계산
            natuIsuTot = natuIsuTot + (Number(grade1.value ?? 0) + Number(grade2.value ?? 0));
        }

        //자유이수단위 계산
        jayuisuTot = jayuisuTot + Number(grade1.value ?? 0) + Number(grade2.value ?? 0);
    }

    //대체 과목 계산
    for(let i = 0; i < rowCount3.length; i++) {
        let subCheck2 = rowCount3[i].querySelector('#cboSubject_3');
        let subject2 = subCheck2.options[subCheck2.selectedIndex].text;

        let grade1_2 = rowCount3[i].querySelector('#txtGrade1_3');
        let unit1_1 = rowCount3[i].querySelector('#cboUnit1_3');
        let unit1_2 = unit1_1.options[unit1_1.selectedIndex];

        let grade2_2 = rowCount3[i].querySelector('#txtGrade2_3');
        let unit2_1 = rowCount3[i].querySelector('#cboUnit2_3');
        let unit2_2 = unit2_1.options[unit2_1.selectedIndex];

        if (grade1_2.value == null || grade1_2.value == "") {
            grade1_2 = 0;
        }
        if (unit1_2.value == null || unit1_2.value == "") {
            unit1_2 = 0;
        }
        if (grade2_2.value == null || grade2_2.value == "") {
            grade2_2 = 0;
        }
        if (unit2_2.value == null || unit2_2.value == "") {
            unit2_2 = 0;
        }

        //하나라도 대체 선택한게 있다면
        if (subCheck2.value != "") {
            if (subject2 == "국어") {
                koreanTot = koreanTot + (Number(grade1_2.value ?? 0) * Number(unit1_2.value ?? 0) + Number(grade2_2.value ?? 0) * Number(unit2_2.value ?? 0));

                console.log(koreanTot);
                //공통이수단위 계산
                isuTot = isuTot + (Number(grade1_2.value ?? 0) + Number(grade2_2.value ?? 0));

            } else if (subject2 == "영어") {
                englishTot = englishTot + (Number(grade1_2.value ?? 0) * Number(unit1_2.value ?? 0) + Number(grade2_2.value ?? 0) * Number(unit2_2.value ?? 0));

                //공통이수단위 계산
                isuTot = isuTot + (Number(grade1_2.value ?? 0) + Number(grade2_2.value ?? 0));
            } else if (subject2 == "수학") {
                mathTot = mathTot + (Number(grade1_2.value ?? 0) * Number(unit1_2.value ?? 0) + Number(grade2_2.value ?? 0) * Number(unit2_2.value ?? 0));

                //공통이수단위 계산
                isuTot = isuTot + (Number(grade1_2.value ?? 0) + Number(grade2_2.value ?? 0));
            } else if (subject2 == "사회") {
                socialTot = socialTot + (Number(grade1_2.value ?? 0) * Number(unit1_2.value ?? 0) + Number(grade2_2.value ?? 0) * Number(unit2_2.value ?? 0));

                //인문이수단위 계산
                inmunIsuTot = inmunIsuTot + (Number(grade1_2.value ?? 0) + Number(grade2_2.value ?? 0));
            } else if (subject2 == "과학") {
                scienceTot = scienceTot + (Number(grade1_2.value ?? 0) * Number(unit1_2.value ?? 0) + Number(grade2_2.value ?? 0) * Number(unit2_2.value ?? 0));

                //자연이수단위 계산
                natuIsuTot = natuIsuTot + (Number(grade1_2.value ?? 0) + Number(grade2_2.value ?? 0));
            }

            //자유이수단위 계산
            jayuisuTot = jayuisuTot + (Number(grade1_2.value ?? 0) + Number(grade2_2.value ?? 0));
        }

    }

    inmunIsuTot = inmunIsuTot + isuTot;
    natuIsuTot = natuIsuTot + isuTot;
    console.log("국어:" + koreanTot + "/ 영어:" + englishTot + "/ 수학:" + mathTot + "/ 사회:" + socialTot + "/ 과학:" + scienceTot);
    console.log("전체이수단위:" + jayuisuTot + " / 인문이수단위:" + inmunIsuTot + " / 자연이수단위:" + natuIsuTot);

    let inmunAvgTot = document.getElementById('avgTotalScore1');
    let natuAvgTot = document.getElementById('avgTotalScore2');
    let jayuAvgTot = document.getElementById('avgTotalScore3');
    let inmunTot = document.getElementById('totalScore1');
    let natuTot = document.getElementById('totalScore2');
    let jayuTot = document.getElementById('totalScore3');
    let artAvgTot = document.getElementById('RstTotalScore7');
    let artTot = document.getElementById('RstTotalScore8');

    if (isuTot == 0) {
        //아무 값도 없을 때
        inmunAvgTot.innerHTML ="";
        natuAvgTot.innerHTML ="";
        jayuAvgTot.innerHTML ="";
        artAvgTot.innerHTML ="";
        inmunTot.innerHTML ="";
        natuTot.innerHTML ="";
        jayuTot.innerHTML ="";
        artTot.innerHTML ="";
    } else {
        //인문 등급 계산
        inmunAvgTot.innerHTML = ((koreanTot + englishTot + mathTot + socialTot) / inmunIsuTot).toFixed(3);
        let inmunUnit = ((koreanTot + englishTot + mathTot + socialTot) / inmunIsuTot).toFixed(3);
        //인문 점수
        inmunTot.innerHTML = ((9 - inmunUnit) * (300 / 8)).toFixed(2);

        //예체능 등급 계산
        artAvgTot.innerHTML = inmunUnit;
        if (selType7.checked) {
            //예체능 실기전형 점수
            artTot.innerHTML = ((9 - inmunUnit) * (250 / 8)).toFixed(2);
        } else if (selType8.checked) {
            //예체능 특기자전형 점수
            artTot.innerHTML = ((9 - inmunUnit) * (350 / 8)).toFixed(2);
        } else {
            artAvgTot.innerHTML = 0;
            artTot.innerHTML = 0;
        }


        //자연 등급 계산
        natuAvgTot.innerHTML = ((koreanTot + englishTot + mathTot + scienceTot) / natuIsuTot).toFixed(3);
        let natuUnit = ((koreanTot + englishTot + mathTot + scienceTot) / natuIsuTot).toFixed(3);
        //자연 점수
        natuTot.innerHTML = ((9 - natuUnit) * (300 / 8)).toFixed(2);

        //자유 등급 계산
        jayuAvgTot.innerHTML = ((koreanTot + englishTot + mathTot + socialTot + scienceTot) / jayuisuTot).toFixed(3);
        let jayuUnit = ((koreanTot + englishTot + mathTot + socialTot + scienceTot) / jayuisuTot).toFixed(3);
        //자유 점수
        jayuTot.innerHTML = ((9 - jayuUnit) * (300 / 8)).toFixed(2);
    }
}

function seongJeok2() {

    selType7 = document.getElementById('rdoSelType7'),
    selType8 = document.getElementById('rdoSelType8');

    let rowCount2 = document.getElementsByClassName('rowCount2');

    let koreanTot = 0;
    let englishTot = 0;
    let mathTot = 0;
    let socialTot = 0;
    let scienceTot = 0;
    let isuTot = 0;
    let inmunIsuTot = 0;
    let natuIsuTot = 0;
    let jayuisuTot = 0;

    for(let i = 0; i < rowCount2.length; i++) {
        let subCheck = rowCount2[i].querySelector('#cboSubject_2');
        let subject = subCheck.options[subCheck.selectedIndex].text;

        let isuDanwi1 = rowCount2[i].querySelector('#txtUnit1_2');
        let seokCha1 = rowCount2[i].querySelector('#txtUnit2_2');
        let sameSeokCha1 = rowCount2[i].querySelector('#txtUnit3_2');
        let jaeJeok1 = rowCount2[i].querySelector('#txtUnit4_2');

        let isuDanwi2 = rowCount2[i].querySelector('#txtUnit5_2');
        let seokCha2 = rowCount2[i].querySelector('#txtUnit6_2');
        let sameSeokCha2 = rowCount2[i].querySelector('#txtUnit7_2');
        let jaeJeok2 = rowCount2[i].querySelector('#txtUnit8_2');

        if (isuDanwi1.value == null || isuDanwi1.value == "") {
            isuDanwi1 = 0;
        }
        if (seokCha1.value == null || seokCha1.value == "") {
            seokCha1 = 0;
        }
        if (sameSeokCha1.value == null || sameSeokCha1.value == "") {
            sameSeokCha1 = 0;
        }
        if (jaeJeok1.value == null || jaeJeok1.value == "") {
            jaeJeok1 = 0;
        }

        if (isuDanwi2.value == null || isuDanwi2.value == "") {
            isuDanwi2 = 0;
        }
        if (seokCha2.value == null || seokCha2.value == "") {
            seokCha2 = 0;
        }
        if (sameSeokCha2.value == null || sameSeokCha2.value == "") {
            sameSeokCha2 = 0;
        }
        if (jaeJeok2.value == null || jaeJeok2.value == "") {
            jaeJeok2 = 0;
        }

        let midSeok1 = 0;
        let midSeok2 = 0;


        if (subject == "국어") {

            if (sameSeokCha1.value == 0) { //1학기 동석차수가 없으면
                midSeok1 = isNaN(Number(seokCha1.value) / Number(jaeJeok1.value)) ? 0 : (Number(seokCha1.value ?? 0) / Number(jaeJeok1.value ?? 0) * 100).toFixed(2);

                koreanTot = koreanTot + (Number(isuDanwi1.value ?? 0) * Number(seokCalc(midSeok1)));

            } else { // 동석차수가 있으면
                midSeok1 = ((Number(seokCha1.value ?? 0) + Number(sameSeokCha1.value ?? 0) - 1 / 2) / Number(jaeJeok1.value ?? 0) * 100).toFixed(2);

                koreanTot = koreanTot + (Number(isuDanwi1.value ?? 0) * Number(seokCalc(midSeok1)));
            }
            if (sameSeokCha2.value == 0) { //2학기 동석차수가 없으면 ,
                midSeok2 = isNaN(Number(seokCha2.value) / Number(jaeJeok2.value)) ? 0 : (Number(seokCha2.value ?? 0) / Number(jaeJeok2.value ?? 0) * 100).toFixed(2);

                koreanTot = koreanTot + (Number(isuDanwi2.value ?? 0) * Number(seokCalc(midSeok2)));

            } else { //동석차수가 있으면
                midSeok2 = ((Number(seokCha2.value ?? 0) + Number(sameSeokCha2.value ?? 0) - 1 / 2) / Number(jaeJeok2.value ?? 0) * 100).toFixed(2);

                if (midSeok1 != 0) {
                    koreanTot = koreanTot + (Number(isuDanwi2.value ?? 0) * Number(seokCalc(midSeok2)));
                }
            }
            //공통이수단위 계산
            isuTot = isuTot + (Number(isuDanwi1.value ?? 0) + Number(isuDanwi2.value ?? 0));
        } else if (subject == "영어") {

            if (sameSeokCha1.value == 0) { //동석차수가 없으면
                midSeok1 = isNaN(Number(seokCha1.value) / Number(jaeJeok1.value)) ? 0 : (Number(seokCha1.value ?? 0) / Number(jaeJeok1.value ?? 0) * 100).toFixed(2);

                englishTot = englishTot + (Number(isuDanwi1.value ?? 0) * Number(seokCalc(midSeok1)));

            } else { // 동석차수가 있으면
                midSeok1 = ((Number(seokCha1.value ?? 0) + Number(sameSeokCha1.value ?? 0) - 1 / 2) / Number(jaeJeok1.value ?? 0) * 100).toFixed(2);

                englishTot = englishTot + (Number(isuDanwi1.value ?? 0) * Number(seokCalc(midSeok1)));
            }
            if (sameSeokCha2.value == 0) { //동석차수가 없으면 ,
                midSeok2 = isNaN(Number(seokCha2.value) / Number(jaeJeok2.value)) ? 0 : (Number(seokCha2.value ?? 0) / Number(jaeJeok2.value ?? 0) * 100).toFixed(2);

                englishTot = englishTot + (Number(isuDanwi2.value ?? 0) * Number(seokCalc(midSeok2)));

            } else {
                midSeok2 = ((Number(seokCha2.value ?? 0) + Number(sameSeokCha2.value ?? 0) - 1 / 2) / Number(jaeJeok2.value ?? 0) * 100).toFixed(2);

                if (midSeok1 != 0) {
                    englishTot = englishTot + (Number(isuDanwi2.value ?? 0) * Number(seokCalc(midSeok2)));
                }
            }
            //공통이수단위 계산
            isuTot = isuTot + (Number(isuDanwi1.value ?? 0) + Number(isuDanwi2.value ?? 0));
        } else if (subject == "수학") {

            if (sameSeokCha1.value == 0) { //동석차수가 없으면
                midSeok1 = isNaN(Number(seokCha1.value) / Number(jaeJeok1.value)) ? 0 : (Number(seokCha1.value ?? 0) / Number(jaeJeok1.value ?? 0) * 100).toFixed(2);

                mathTot = mathTot + (Number(isuDanwi1.value ?? 0) * Number(seokCalc(midSeok1)));

            } else { // 동석차수가 있으면
                midSeok1 = ((Number(seokCha1.value ?? 0) + Number(sameSeokCha1.value ?? 0) - 1 / 2) / Number(jaeJeok1.value) * 100).toFixed(2);

                mathTot = mathTot + (Number(isuDanwi1.value ?? 0) * Number(seokCalc(midSeok1)));
            }
            if (sameSeokCha2.value == 0) { //동석차수가 없으면 ,
                midSeok2 = isNaN(Number(seokCha2.value) / Number(jaeJeok2.value)) ? 0 : (Number(seokCha2.value ?? 0) / Number(jaeJeok2.value ?? 0) * 100).toFixed(2);

                mathTot = mathTot + (Number(isuDanwi2.value ?? 0) * Number(seokCalc(midSeok2)));

            } else {
                midSeok2 = ((Number(seokCha2.value ?? 0) + Number(sameSeokCha2.value ?? 0) - 1 / 2) / Number(jaeJeok2.value ?? 0) * 100).toFixed(2);

                if (midSeok1 != 0) {
                    mathTot = mathTot + (Number(isuDanwi2.value ?? 0) * Number(seokCalc(midSeok2)));
                }
            }
            //공통이수단위 계산
            isuTot = isuTot + (Number(isuDanwi1.value ?? 0) + Number(isuDanwi2.value ?? 0));
        } else if (subject == "사회") {

            if (sameSeokCha1.value == 0) { //동석차수가 없으면
                midSeok1 = isNaN(Number(seokCha1.value) / Number(jaeJeok1.value)) ? 0 : (Number(seokCha1.value ?? 0) / Number(jaeJeok1.value ?? 0) * 100).toFixed(2);

                socialTot = socialTot + (Number(isuDanwi1.value ?? 0) * Number(seokCalc(midSeok1)));

            } else { // 동석차수가 있으면
                midSeok1 = ((Number(seokCha1.value ?? 0) + Number(sameSeokCha1.value ?? 0) - 1 / 2) / Number(jaeJeok1.value ?? 0) * 100).toFixed(2);

                socialTot = socialTot + (Number(isuDanwi1.value ?? 0) * Number(seokCalc(midSeok1)));
            }
            if (sameSeokCha2.value == 0) { //동석차수가 없으면 ,
                midSeok2 = isNaN(Number(seokCha2.value) / Number(jaeJeok2.value)) ? 0 : (Number(seokCha2.value ?? 0) / Number(jaeJeok2.value ?? 0) * 100).toFixed(2);

                socialTot = socialTot + (Number(isuDanwi2.value ?? 0) * Number(seokCalc(midSeok2)));

            } else {
                midSeok2 = ((Number(seokCha2.value ?? 0) + Number(sameSeokCha2.value ?? 0) - 1 / 2) / Number(jaeJeok2.value ?? 0) * 100).toFixed(2);

                if (midSeok1 != 0) {
                    socialTot = socialTot + (Number(isuDanwi2.value ?? 0) * Number(seokCalc(midSeok2)));
                }
            }

            //인문이수단위 계산
            inmunIsuTot = inmunIsuTot + (Number(isuDanwi1.value ?? 0) + Number(isuDanwi2.value ?? 0));
        } else if (subject == "과학") {

            if (sameSeokCha1.value == 0) { //동석차수가 없으면
                midSeok1 = isNaN(Number(seokCha1.value) / Number(jaeJeok1.value)) ? 0 : (Number(seokCha1.value ?? 0) / Number(jaeJeok1.value ?? 0) * 100).toFixed(2);

                console.log("1학기 중간석차 " + midSeok1);
                scienceTot = scienceTot + (Number(isuDanwi1.value ?? 0) * Number(seokCalc(midSeok1)));

            } else { // 동석차수가 있으면
                midSeok1 = ((Number(seokCha1.value ?? 0) + Number(sameSeokCha1.value ?? 0) - 1 / 2) / Number(jaeJeok1.value ?? 0) * 100).toFixed(2);

                scienceTot = scienceTot + (Number(isuDanwi1.value ?? 0) * Number(seokCalc(midSeok1)));
            }
            if (sameSeokCha2.value == 0) { //동석차수가 없으면 ,
                midSeok2 = isNaN(Number(seokCha2.value ?? 0) / Number(jaeJeok2.value)) ? 0 : (Number(seokCha2.value) / Number(jaeJeok2.value) * 100).toFixed(2);

                scienceTot = scienceTot + (Number(isuDanwi2.value ?? 0) * Number(seokCalc(midSeok2)));

            } else {
                midSeok2 = ((Number(seokCha2.value ?? 0) + Number(sameSeokCha2.value ?? 0) - 1 / 2) / Number(jaeJeok2.value) * 100).toFixed(2);

                if (midSeok1 != 0) {
                    scienceTot = scienceTot + (Number(isuDanwi2.value ?? 0) * Number(seokCalc(midSeok2)));
                }
            }

            //자연이수단위 계산
            natuIsuTot = natuIsuTot + (Number(isuDanwi1.value ?? 0) + Number(isuDanwi2.value ?? 0));
        }

        //자유이수단위 계산
        jayuisuTot = jayuisuTot + (Number(isuDanwi1.value ?? 0) + Number(isuDanwi2.value ?? 0));
    }


    console.log(isuTot);
    inmunIsuTot = inmunIsuTot + isuTot;
    natuIsuTot = natuIsuTot + isuTot;
    console.log("국어:" + koreanTot + "/ 영어:" + englishTot + "/ 수학:" + mathTot + "/ 사회:" + socialTot + "/ 과학:" + scienceTot);
    console.log("전체이수단위:" + jayuisuTot + " / 인문이수단위:" + inmunIsuTot + " / 자연이수단위:" + natuIsuTot);

    let inmunAvgTot = document.getElementById('avgTotalScore1');
    let natuAvgTot = document.getElementById('avgTotalScore2');
    let jayuAvgTot = document.getElementById('avgTotalScore3');
    let inmunTot = document.getElementById('totalScore1');
    let natuTot = document.getElementById('totalScore2');
    let jayuTot = document.getElementById('totalScore3');
    let artAvgTot = document.getElementById('RstTotalScore7');
    let artTot = document.getElementById('RstTotalScore8');

    if (isuTot == 0) {
        //아무 값도 없을 때
        inmunAvgTot.innerHTML ="";
        natuAvgTot.innerHTML ="";
        jayuAvgTot.innerHTML ="";
        artAvgTot.innerHTML ="";
        inmunTot.innerHTML ="";
        natuTot.innerHTML ="";
        jayuTot.innerHTML ="";
        artTot.innerHTML ="";
    } else {
        //인문 등급 계산
        inmunAvgTot.innerHTML = ((koreanTot + englishTot + mathTot + socialTot) / inmunIsuTot).toFixed(3);
        let inmunUnit = ((koreanTot + englishTot + mathTot + socialTot) / inmunIsuTot).toFixed(3);
        //인문 점수
        inmunTot.innerHTML = ((9 - inmunUnit) * (300 / 8)).toFixed(2);

        //예체능 등급 계산
        artAvgTot.innerHTML = inmunUnit;
        if (selType7.checked) {
            //예체능 실기전형 점수
            artTot.innerHTML = ((9 - inmunUnit) * (250 / 8)).toFixed(2);
        } else if (selType8.checked) {
            //예체능 특기자전형 점수
            artTot.innerHTML = ((9 - inmunUnit) * (350 / 8)).toFixed(2);
        } else {
            artAvgTot.innerHTML = 0;
            artTot.innerHTML = 0;
        }


        //자연 등급 계산
        natuAvgTot.innerHTML = ((koreanTot + englishTot + mathTot + scienceTot) / natuIsuTot).toFixed(3);
        let natuUnit = ((koreanTot + englishTot + mathTot + scienceTot) / natuIsuTot).toFixed(3);
        //자연 점수
        natuTot.innerHTML = ((9 - natuUnit) * (300 / 8)).toFixed(2);

        //자유 등급 계산
        jayuAvgTot.innerHTML = ((koreanTot + englishTot + mathTot + socialTot + scienceTot) / jayuisuTot).toFixed(3);
        let jayuUnit = ((koreanTot + englishTot + mathTot + socialTot + scienceTot) / jayuisuTot).toFixed(3);
        //자유 점수
        jayuTot.innerHTML = ((9 - jayuUnit) * (300 / 8)).toFixed(2);
    }
}

function seokCalc(midSeok) {

    if (midSeok <= 4) {
        return 1;
    } else if (midSeok > 4 && midSeok <= 11) {
        return 2;
    } else if (midSeok > 11 && midSeok <= 23) {
        return 3;
    } else if (midSeok > 23 && midSeok <= 40) {
        return 4;
    } else if (midSeok > 40 && midSeok <= 60) {
        return 5;
    } else if (midSeok > 60 && midSeok <= 77) {
        return 6;
    } else if (midSeok > 77 && midSeok <= 89) {
        return 7;
    } else if (midSeok > 89 && midSeok <= 96) {
        return 8;
    } else if (midSeok > 96 && midSeok <= 100) {
        return 9;
    }
}

function dayCount() {

    selType7 = document.getElementById('rdoSelType7'),
    selType8 = document.getElementById('rdoSelType8');

    let gyulSeok = document.getElementById('Att5');
    let gyulSeok2 = document.getElementById('Att1');
    let gyulSeokTot = document.getElementById('TotAttend');

    //사고 등으로 인한 결석일 계산
    if (gyulSeok.value != null && gyulSeok != "") {
        gyulSeok.value = 0;

        gyulSeok.value = Math.floor((Number(document.getElementById('Att2').value) + Number(document.getElementById('Att3').value) + Number(document.getElementById('Att4').value)) / 3);

        //총 결석일 수 계산
        if (gyulSeok2.value != null && gyulSeok2.value != "") {
            gyulSeokTot.value = 0;

            gyulSeokTot.value = Number(gyulSeok.value) + Number(gyulSeok2.value);


            if (gyulSeokTot.value >= 0 && selType8.checked) {
                document.getElementById('RstTotalScore9').innerHTML = Number(50 - gyulSeokTot.value);
            } else {
                document.getElementById('RstTotalScore9').innerHTML = "";
            }
        }
    }
}

function geomJeong() {
    let geomKor = document.getElementById('txtNum1');
    let geomEng = document.getElementById('txtNum2');
    let geomMath = document.getElementById('txtNum3');
    let geomSoci = document.getElementById('txtNum4');
    let geomScie = document.getElementById('txtNum5');
    let geomHis = document.getElementById('txtNum6');
    let geomEtc = document.getElementById('txtNum7');

    let geomTot = Number(geomKor.value ?? 0) + Number(geomEng.value ?? 0) + Number(geomMath.value ?? 0) + Number(geomSoci.value ?? 0) + Number(geomScie.value ?? 0) + Number(geomHis.value ?? 0) + Number(geomEtc.value ?? 0);

    if(geomTot == 0){
        document.getElementById('RstTotalScore10').innerHTML ="";
    }
    else{
        geomTot = (geomTot / 5 * 3).toFixed(2);
        document.getElementById('RstTotalScore10').innerHTML =geomTot;
    }
}

function arrEmpty() {

    let writeBox = document.getElementsByClassName('type1');
    for(var i = 0; i<writeBox.length; i++){ //엥 됐다
        if(writeBox[i].id == "Att1" || writeBox[i].id == "Att2" || writeBox[i].id == "Att3" || writeBox[i].id == "Att4" || writeBox[i].id == "Att5" ){
            writeBox[i].value = "0";
        }
        else{
            writeBox[i].value = "";
        }
        document.getElementById('avgTotalScore1').innerHTML = "";
        document.getElementById('avgTotalScore2').innerHTML = "";
        document.getElementById('avgTotalScore3').innerHTML = "";
        document.getElementById('totalScore1').innerHTML = "";
        document.getElementById('totalScore2').innerHTML = "";
        document.getElementById('totalScore3').innerHTML = "";
        document.getElementById('RstTotalScore7').innerHTML = "";
        document.getElementById('RstTotalScore8').innerHTML = "";
        document.getElementById('RstTotalScore9').innerHTML = "";
        document.getElementById('RstTotalScore10').innerHTML = "";
    }
}


function setCalculateResult() {
    let scholaship4 = document.getElementById('rdoScholarship3');

    dayCount();
    geomJeong();
    seongJeok1();
    if (scholaship4.checked) {
        seongJeok2();
    }
}
