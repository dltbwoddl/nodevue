const ogs = require('open-graph-scraper'),
Hashmap = require('hashmap'),
Crypto = require('crypto-js'),
SHA256 = ('crypto-js/sha256');

//안에 있는 것을 밖에서 사용할 수 있음.
// class를 사용해도된다. 매번 실행할 때 마다 new해서 쓰겠다고 하면 class사용하는 것이 좋다.
//thread를 safe하게 할 때 사용.
//static하면 메소드를 동시에 둘이서 콜했을 때 영향을 줄 수 있는 상황이라면 문제가 된다.
//이때 class로 만들어준다.
const Ekey = "nodevue";

module.exports={
    //이미지를 담은 url을 가져오는 함수
makeMap(key,value){
    const map = new Hashmap();
    map.set(key,value);
    console.log(map.get(key))
    return map
},
    
    encryptSha2(data,key){
        if(!data) return null;
        key=key||Ekey;
        try{
            return Crypto.SHA256(data+key).toString()
        }catch(err){

        }
    },
    encrypt(data,key){
        return Crypto.AES.encrypt(data,key || Ekey).toString();
    },
    decrtpt(data,key){
        return Crypto.AES.decrypt(data,key || Ekey).toString(Crypto.enc.Utf8);
    }
    ,

    ogsinfo(url,fn){
        return ogs({url : url},(err,ret)=>{
            fn(err,ret);
        });
    }
};
