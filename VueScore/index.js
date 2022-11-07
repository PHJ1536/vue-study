﻿var app = new Vue({
  el: '#wrap',
  data: {
    BasicInfo: {
      UnivID: 1099,
      UnivName: "국립순천대학교",
      ServiceYear: 2023,
      ScholarShip: [{
          value: '1',
          text: '2022년 이후 고등학교 졸업(예정)자'
        },
        {
          value: '2',
          text: '2008년 ~ 2021년 고등학교 졸업자'
        },
        {
          value: '3',
          text: '2007년 2월 이전 졸업자'
        },
        {
          value: '4',
          text: '고등학교 검정고시출신자'
        },
      ],
      SelTypeCode: [{
          value: '1',
          text: '지역인재전형'
        },
        {
          value: '2',
          text: '지역균형인재전형'
        },
        {
          value: '3',
          text: '전국인재전형'
        },
        {
          value: '4',
          text: '성인학습자등전형'
        },
        {
          value: '5',
          text: '특수교육대상자전형'
        },
        {
          value: '6',
          text: '특성화고재직자전형'
        },
        {
          value: '7',
          text: '실기전형'
        },
        {
          value: '8',
          text: '특기자전형'
        },
      ],

      DefaultScoreInput1: {
        Year: '',
        Subject: '',
        SubjectText: null,
        Unit1: null,
        Grade1: null,
        Unit2: null,
        Grade2: null,
      },
      DefaultScoreInput2: {
        Year: '',
        Subject: '',
        SubjectText: null,
        Unit1: null,
        Grade1: null,
        SameGrade1: null,
        Jaejeok1: null,
        Unit2: null,
        Grade2: null,
        SameGrade2: null,
        Jaejeok2: null,
      },
      DefaultScoreInput3: {
        Year: '',
        Subject: '',
        SubjectText: null,
        Unit1: null,
        Grade1: '',
        Unit2: null,
        Grade2: '',
      },
      DefaultScoreInput4: {
        Korean: '',
        English: '',
        Math: '',
        Social: '',
        Science: '',
        History: '',
        EtcSub: '',
      },
    },

    // 실제 입력 데이터 연동
    ScholarShip: '1',
    SelTypeCode: '1',
    ScoreInput1: [],
    ScoreInput2: [],
    ScoreInput3: [],
    ScoreInput4: [],

  },


  created: function () {

    // let newItem = {...this.BasicInfo.DefaultScoreInput1};
    // this.ScoreInput1.push(newItem);
    this.AddScoreInput1Rnd();
    this.AddScoreInput1Rnd();
    this.AddScoreInput1Rnd();
    this.AddScoreInput2Rnd();
    this.AddScoreInput3Rnd();
    this.AddScoreInput4Rnd();
  },

  // mounted: function () {

  // },

  computed: {
    ScoreInput1Display: function () {
      return this.ScholarShip == '1';
    },
    ScoreInput2Display: function () {
      return this.ScholarShip == '2';
    },
    ScoreInput3Display: function () {
      return this.ScholarShip == '3';
    },
    ScoreInput4Display: function () {
      return this.ScholarShip == '4';
    },

    ScoreTotal1Display: function () {
      return this.SelTypeCode == '7' || this.SelTypeCode == '8';
    },
    ScoreTotal2Display: function () {
      return this.SelTypeCode < 7;
    },

    SelTypeIsFirst: function () {
      var group = {
        '학생부교과': [],
        '실기/실적': []
      };

      // step1
      // group['학생부교과'] = this.BasicInfo.SelTypeCode.slice(0,6);
      // group['실기/실적'] = this.BasicInfo.SelTypeCode.slice(6);

      // step2
      // for(let i = 0; i = this.BasicInfo.SelTypeCode.length;i++){
      //   item = this.BasicInfo.SelTypeCode[i];
      //   if(i < 6) {
      //     group['학생부교과'].push(item);
      //   }
      //   else{
      //     group['실기/실적'].push(item);
      //   }
      // }

      // step3
      this.BasicInfo.SelTypeCode.reduce(function (ac, item, idx) {
        if (idx < 6) ac['학생부교과'].push(item);
        else ac['실기/실적'].push(item);
        return ac;
      }, group);

      return group;
    },
    SelTypeGroup1: function () {
      if(this.ScholarShip =='4'){
        return this.SelTypeIsFirst['학생부교과'].slice(2,4);
      }
      else{
        return this.SelTypeIsFirst['학생부교과'];
      }

      // return this.BasicInfo.SelTypeCode.slice(0,6);
    },
    SelTypeGroup2: function () {
      return this.SelTypeIsFirst['실기/실적'];
      // return this.BasicInfo.SelTypeCode.slice(6);
    },

    totalScore1: function () {
      let scoreSum =0, unitSum=0, 
      InmunAvgUnit, InmunSubjectScore,
      InmunScoreSum=0, InmunUnitSum=0,
      NatureAvgUnit, NatureSubjectScore,
      NatureScoreSum=0, NatureUnitSum=0,
      JayuAvgUnit, JayuSubjectScore,
      JayuScoreSum=0, JayuUnitSum=0;

      // 점수 입력 행이 없을 때
      if (this.ScoreInput1.length == 0) return '';
        scoreSum = 0,unitSum = 0;

      function toNumber(n) {
        if (isNaN(n)) return 0;
        return Number(n);
      }

      
      this.ScoreInput1.forEach(function (d) {
        let unit1 = toNumber(d.Unit1),grade1 = toNumber(d.Grade1);
        let unit2 = toNumber(d.Unit2),grade2 = toNumber(d.Grade2);

        scoreSum += unit1 * grade1 + unit2 * grade2;
        unitSum += unit1 + unit2;
      
        if(d.Subject == 1 || d.Subject == 2 | d.Subject == 3){//공통 과목이면
          JayuScoreSum += (unit1 * grade1 + unit2 * grade2);
          JayuUnitSum += (unit1 + unit2);

          InmunScoreSum += (unit1 * grade1 + unit2 * grade2);
          InmunUnitSum += (unit1 + unit2);
          NatureScoreSum += (unit1 * grade1 + unit2 * grade2);
          NatureUnitSum += (unit1 + unit2);
        }
        else if (d.Subject == 4) {//사회 과목이면
          //인문사회/예체능
          JayuScoreSum += (unit1 * grade1 + unit2 * grade2);
          JayuUnitSum += (unit1 + unit2);
          InmunScoreSum += (unit1 * grade1 + unit2 * grade2);
          InmunUnitSum += (unit1 + unit2);
        }
        else if (d.Subject == 5) {//과학 과목이면
          //자연
          JayuScoreSum += (unit1 * grade1 + unit2 * grade2);
          JayuUnitSum += (unit1 + unit2);
          NatureScoreSum += (unit1 * grade1 + unit2 * grade2);
          NatureUnitSum += (unit1 + unit2);
        }

        console.log("자유누적: ",JayuUnitSum);
        console.log("자연누적: ",NatureUnitSum);
        console.log("인문누적: ",InmunUnitSum);

        JayuAvgUnit = toNumber((scoreSum / unitSum).toFixed(2));
        JayuSubjectScore = toNumber(((9 - JayuAvgUnit) * (300 / 8)).toFixed(2));

        NatureAvgUnit = toNumber((NatureScoreSum / NatureUnitSum).toFixed(2));
        NatureSubjectScore = toNumber(((9 - NatureAvgUnit) * (300 / 8)).toFixed(2));

        InmunAvgUnit = toNumber((InmunScoreSum / InmunUnitSum).toFixed(2));
        InmunSubjectScore = toNumber(((9 - InmunAvgUnit) * (300 / 8)).toFixed(2));

        if(NatureAvgUnit==0){
          NatureAvgUnit = null;
          NatureSubjectScore = null;}
        else if(InmunAvgUnit==0){
          InmunAvgUnit = null;
          InmunSubjectScore = null;;
        }
      }
      );

      return [JayuAvgUnit, JayuSubjectScore, InmunAvgUnit, InmunSubjectScore, NatureAvgUnit, NatureSubjectScore];
    },


  },
  methods: {
    InputRandom: function (min = 1, max = 9) {
      return Math.floor(Math.random() * max) + min;
    },

    AddScoreInput1: function (item) {
      // OLD
      // let newItem = Object.assign({}, this.BasicInfo.DefaultScoreInput1);

      // NEW
      if (item) return this.ScoreInput1.push(item);
      let newItem = {
        ...this.BasicInfo.DefaultScoreInput1
      };
      this.ScoreInput1.push(newItem);
    },
    RemoveScoreInput1: function (index) {
      console.log(this.ScoreInput1.length);
      if (this.ScoreInput1.length == 1) {
        //alert("지우지마");
        return;
      }
      this.ScoreInput1.splice(index, 1);
    },
    AddScoreInput2: function (item) {
      if (item) return this.ScoreInput2.push(item);
      let newItem = {
        ...this.BasicInfo.DefaultScoreInput2
      };
      this.ScoreInput2.push(newItem);
    },
    RemoveScoreInput2: function (index) {
      console.log(this.ScoreInput2.length);
      if (this.ScoreInput2.length == 1) {
        return;
      }
      this.ScoreInput2.splice(index, 1);
    },
    AddScoreInput3: function (item) {
      if (item) return this.ScoreInput3.push(item);
      let newItem = {
        ...this.BasicInfo.DefaultScoreInput3
      };
      this.ScoreInput3.push(newItem);
    },
    RemoveScoreInput3: function (index) {
      console.log(this.ScoreInput3.length);
      if (this.ScoreInput3.length == 1) {
        return;
      }
      this.ScoreInput3.splice(index, 1);
    },
    AddScoreInput4: function (item) {
      if (item) return this.ScoreInput4.push(item);
      let newItem = {
        ...this.BasicInfo.DefaultScoreInput4
      };
      this.ScoreInput4.push(newItem);
    },

    AddScoreInput1Rnd: function () {
      let newItem = {
        ...this.BasicInfo.DefaultScoreInput1,
        Year: this.InputRandom(1, 3),
        Subject: this.InputRandom(1, 5),
        SubjectText: '교과성적',
        Unit1: this.InputRandom(),
        Grade1: this.InputRandom(),
        Unit2: this.InputRandom(),
        Grade2: this.InputRandom(),
      };

      this.AddScoreInput1(newItem);
    },
    AddScoreInput2Rnd: function () {
      let newItem = {
        ...this.BasicInfo.DefaultScoreInput2,
        Year: this.InputRandom(1, 3),
        Subject: this.InputRandom(1, 5),
        SubjectText: '교과성적(동석차)',
        Unit1: this.InputRandom(),
        Grade1: this.InputRandom(),
        SameGrade1: this.InputRandom(0, 5),
        Jaejeok1: this.InputRandom(100, 200),
        Unit2: this.InputRandom(),
        Grade2: this.InputRandom(),
        SameGrade2: this.InputRandom(0, 5),
        Jaejeok2: this.InputRandom(100, 200),
      };

      this.AddScoreInput2(newItem);
    },
    AddScoreInput3Rnd: function () {
      let newItem = {
        ...this.BasicInfo.DefaultScoreInput3,
        Year: this.InputRandom(1, 3),
        Subject: this.InputRandom(1, 5),
        SubjectText: '대체과목',
        Unit1: this.InputRandom(),
        Grade1: this.InputRandom(),
        Unit2: this.InputRandom(),
        Grade2: this.InputRandom(),
      };

      this.AddScoreInput3(newItem);
    },
    AddScoreInput4Rnd: function () {
      let newItem = {
        ...this.BasicInfo.DefaultScoreInput4,
        Korean: this.InputRandom(1, 100),
        English: this.InputRandom(1, 100),
        Math: this.InputRandom(1, 100),
        Social: this.InputRandom(1, 100),
        History: this.InputRandom(1, 100),
        Science: this.InputRandom(1, 100),
        EtcSub: this.InputRandom(1, 100),
      };

      this.AddScoreInput4(newItem);
    },
  },
})