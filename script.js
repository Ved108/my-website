function showLyrics(mantra) {
    const lyricsDiv = document.getElementById('lyrics');

    const mantras = {
        ganesh: `Om Gan Ganapataye Namah`,
        durga: `Om Dum Durgayei Namah`,
        lakshmi: `Om Shreem Mahalakshmiyei Namah`,
        shiva: `Om Namah Shivaya`,
        vishnu: `Om Namo Bhagavate Vasudevaya`,
        saraswati: `Om Aim Saraswatyai Namah`,
        hanuman: `Om Hanumate Namah`,
        krishna: `Om Namo Bhagavate Krishnaaya`,
        rama: `Om Shri Ramaya Namah`,
        narasimha: `Om Namo Narasimhaya`,
        mahadev: `Om Namah Shivaya`,
        parvati: `Om Parvatyai Namah`,
        kartikeya: `Om Skandaya Namah`,
        gayatri: `Om Bhur Bhuvaḥ Swaḥ<br>
Tat-savitur Vareñyaṃ<br>
Bhargo Devasya Dhīmahi<br>
Dhiyo Yo Naḥ Prachodayāt`,
        mahamrityunjaya: `Om Tryambakam Yajamahe<br>
Sugandhim Pushtivardhanam<br>
Urvarukamiva Bandhanan<br>
Mrityor Mukshiya Maamritat`
        // Add more key-value pairs for remaining mantras up to 50
    };

    if (mantra in mantras) {
        lyricsDiv.innerHTML = mantras[mantra];
    } else {
        lyricsDiv.innerHTML = "";
    }
}
