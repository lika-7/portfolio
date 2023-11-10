import About from "../components/section/About"
import Career from "../components/section/Career"
import Project from "../components/section/Project"
import Skill from "../components/section/Skill"

export const categories = [
    {'content': 'About me', 'component':<About/>},
    {'content': 'Skill', 'component':<Skill/>},
    {'content': 'Project', 'component':<Project />},
    {'content': 'Career', 'component':<Career />},
]


export const coverage = [
    '사용 가능한 프로그래밍 언어 다수 : javascript, C, python 등', 
    '개발 커버리지 다양: 공장 자동화, IoT, 백엔드, 프론트엔드, 펌웨어, 서버',
    '여러 제품군을 서비스에 연동 가능함: 계측기, 센서, PLC, 기타 제품 등',
    '여러 프레임워크 사용 경험 다수: express, modbus, react 등',
    '새로운 학습에 능숙함'
]

export const skill = [
    {'backend': ['node.js', 'Express.js', 'ubuntu-server','Azure','AWS','Firebase','mariaDB','sequelize','axios','JWT','pm2','samba']},
    {'frontend': ['React.js','styled.js','html','css','javascript','chart.js','Socket.IO']},
    {'equipment': ['raspberryPI', 'arduino', 'PLC','file-server', 'Labview','brickstream','기타 계측기']},
    {'tool': ['notion','Figma']},
    {'etc': ['FFMPEG','RF 통신','LoRa']}
]

export const career = [
    {'company': '엘트란', 'period': '', 'description': '', 'main': true},
    {'company': '이몰로지', 'period': '', 'description': '', 'main': false},
    {'company': '코니스테크', 'period': '', 'description': '', 'main': false},
    {'company': '삼일데이타시스템', 'period': '', 'description': '', 'main': true},
]

export const licence = [
    {'name': '정보처리기사', 'authority ': '한국산업인력공단', 'date': '2023.06'},
]

export const education = [
    {'name': '두원공과 대학', 'content': '메카트로닉스', 'period' : '2012.03 ~ 2017.02'},
    {'name': '무원 고등학교', 'content': '이과', 'period' : '2009.03~ 2012.02'},

]