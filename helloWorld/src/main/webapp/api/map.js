            //보여중항목 정의
            const fields = ['id', 'centerName', 'address', 'phoneNumber', 'sido', 'sigungu', 'map'];

            function showCenterList(data) {
                //전체카운트 : data.currentCount : 284
                //현재페이지 : data.page : 1
                //전체테이터 : data.data : 284건의 접종센터 정보.

                //table 요소가 있으면 삭제.
                if (document.getElementById('tbl')) {
                    document.getElementById('tbl').remove();
                }

                let table = document.createElement('table');
                table.setAttribute('border', '1');
                table.setAttribute('id', 'tbl');
                let thead = document.createElement('thead');
                let tbody = document.createElement('tbody');

                //table의 하위요소로  thead, tbody 추가.
                table.append(thead, tbody);
                //thead 작성.
                let tr = document.createElement('tr');
                fields.forEach(function (field) {
                    let td = document.createElement('th');
                    let text = document.createTextNode(field.toUpperCase());
                    td.append(text);
                    tr.append(td);
                });
                thead.append(tr);

                //tbody 작성.
                data.forEach(function (item) {
                    let tr = document.createElement('tr');
                    fields.forEach(function (field) {
                        //map = > link 생성
                        if (field == 'map') {
                            let linkTag = document.createElement('a');
                            linkTag.setAttribute('href', `daum.html?lat=${item.lat}&lng=${item.lng}&facility=${item.facilityName}`);
                            linkTag.setAttribute('target', '_blank');
                            linkTag.innerText = item.centerName;

                            let td = document.createElement('td');
                            td.appendChild(linkTag);
                            tr.append(td);
                        } else {
                            let td = document.createElement('td');
                            let text = document.createTextNode(item[field]);
                            td.append(text);
                            tr.append(td);
                        }
                    });
                    tbody.append(tr);

                });
                document.getElementById('show').append(table);
            }
            //시도별로 센터 정보 보여주기.

            function showCenterListBysido(data) {
                //data.totalCount, data.page, data.data
                let centers = data.data;
                //시도 = > 정보생성  
                let filteredCenter = []; //시도 이름 중복된거 제거
                centers.forEach(function (item) {
                    //filteredCenter값중에서 item.sido 같은 값이 없으면 추가
                    if (filteredCenter.indexOf(item.sido) == -1) {
                        filteredCenter.push(item.sido);
                    }
                });
                console.log(filteredCenter);
                //버튼생성
                let show = document.getElementById('show');
                filteredCenter.forEach(function (centerName) {
                    let btn = document.createElement('button');
                    btn.innerText = centerName;
                    btn.addEventListener('click', showSidoList);
                    show.appendChild(btn);
                });

                function showSidoList() {
                    //서울 특별시 =>서울특별시 소속의 센터 출력
                    console.log(this.innerText);
                    let searchCenterName = this.innerText;

                    let filterAry = centers.filter(function (item) {
                        return item.sido == searchCenterName;
                    });
                    //filterAry.length = > 배열의 크기
                    //paging 페이지 수를 계산
                    //a 태그 생성하는 부분 (추가)
                    let paging = document.getElementById('page');
                    //새로운 시군구의 정보를 보여주기 전에 이전 페이지 정보를 초기화.
                    let children = paging.childNodes;
                    let lnth = children.length;
                    for (let i = 0; i < lnth; i++) {
                        paging.removeChild(children[0]);
                    }
                    let totalCnt = filterAry.length; //43 / 10 =?43
                    let totalPage = Math.ceil(totalCnt / 10);
                    for (let i = 1; i <= totalPage; i++) {
                        let aTag = document.createElement('a');
                        aTag.innerText = i;
                        aTag.setAttribute('href', '#');
                        aTag.addEventListener('click', pagingList); //pagingList는 이벤트
                        paging.appendChild(aTag);


                    }


                    console.log(filterAry);
                    //filterAry =>[{},{},{}]

                    pagingList(); //첫번째 페이지 보여주기 위한 코드1
                    //showCenterList(filterAry); //43개 호출
                    function pagingList() {
                        //리스트 a에 있는 class를 초기화 
                        let allA = document.querySelectorAll('#page>a');
                        for (let a of allA) {
                            a.setAttribute('class', '');
                        }
                        //<a>,<div> =>1,window nodeType
                        if (this.nodeType == 1) {
                            this.setAttribute('class', 'active'); //클릭했을때 반응을 달리 하는 코드
                        }
                        let page = this.innerText;
                        if (page == null || page == '') {
                            page = '1'; //첫번째 페이지 보여주기 위한 코드2
                        }
                        page = parseInt(page); //page 1 //page 2
                        pagingAry = filterAry.filter(function (item, ind) {
                            let startCnt = (page - 1) * 10; //index값 = 0 //10
                            let endCnt = (page * 10); //index 값= 10 //20
                            return startCnt <= ind && ind < endCnt; //인덱스값 기준으로 0~9까지만 보여줌  //10~19
                        });
                    }
                    showCenterList(pagingAry); //43개 호출
                }
                //서울특별시 클릭.
                let firstBtn = document.querySelector('#show>button:nth-child(1)');
                firstBtn.click(); //클릭이벤트호출.

                //사용자 입력값을 읽고 =>

                let button = document.getElementById('searchBtn');
                button.addEventListener('click', searchFnc);

                function searchFnc() {
                    let input = document.getElementById('searchCenter').value;
                    let ss = document.querySelectorAll('#show>button');

                    ss.forEach(function (item) {
                        if (input == item.innerText) {
                            item.click();
                        }
                    })
                }

                //버튼 이벤트 등록
                searchBtn.click();

            }
            //Asynchoronous Javascript And Xml (ajax)
            let url =
                'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&returnType=JSON&serviceKey=PhBKMvs8vOAOPcD0ELQr68swBZJliXbBSOzVJzyxwz%2F3lJ2sriUw2jcP3rPsEHRskz6Dh%2Fr%2BrA%2FTbGrA0KB7Fg%3D%3D';
            let xhtp = new XMLHttpRequest();
            xhtp.onreadystatechange = function () {
                if (xhtp.readyState == 4 && xhtp.status == 200) {
                    console.log('readystate : ' + xhtp.readyState);
                    console.log('status : ' + xhtp.status);
                    let data = JSON.parse(xhtp.responseText)
                    console.log(data); //{currentCount : 284, data : [{}{}{}], totalCount : 284}

                    // makePage(data);
                    // showCenterList(data.data);//전체센터 보여주기
                    showCenterListBysido(data);

                }
            }
            xhtp.open('get', url);
            xhtp.send();