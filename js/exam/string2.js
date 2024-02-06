const s = ['강원도 고성군', '고성군 토성면', '토성면 북면', '북면', '김1수'];

const ㄱㄴㄷ='ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const 가나다='가까나다따라마바빠사싸아자짜차카타파하힣';

const searchByKoreanInitialSound=(s, str)=>{
    // for(a of str){
    //     const regex = new RegExp(`/[ㄱ가-깋]/`);
    // }
    const regexps=[...str].map(is=>{
        const idx=ㄱㄴㄷ.indexOf(is);
        if(idx==-1) return is;
        const S = 가나다.at(idx);
        const endCode = 가나다.at(idx+1).charCodeAt(0)-1;
        const E = String.fromCharCode(endCode -1);

        //@Todo ㅎ 처리!
        return `[${c}${S}-${E}]`;
    });
    
};

const results=s.filter(s => {
    console.log("🚀 ~ s:", s)
    return s.match(/[ㄱ가-깋][ㅅ사-싷]/)
});


searchByKoreanInitialSound(s, 'ㄱㅅㄱ');
searchByKoreanInitialSound(s, 'ㅌㅅㅁ');
searchByKoreanInitialSound(s, 'ㅂㅁ'); 
searchByKoreanInitialSound(s, 'ㅍㅁ'); 
searchByKoreanInitialSound(s, 'ㄱ1ㅅ');

console.log('가'.charCodeAt(0));
console.log('깋'.charCodeAt(0));
console.log('깋'.charCodeAt(0)-'가'.charCodeAt(0)); //587
console.log('나'.charCodeAt(0));
console.log('닣'.charCodeAt(0));
console.log('닣'.charCodeAt(0)-'나'.charCodeAt(0)); //587
console.log(String.fromCharCode(44620));