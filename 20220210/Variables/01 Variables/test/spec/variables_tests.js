/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

describe("01 Variables and calculations", function () {
    it("Student", function () {
        var temp = prompt("Your name: ");
        $("#nimix").html(temp);
        expect(temp).not.toEqual("");
    });

    // T1: Read and print
    it("T1: Read and print", function () {
        $("#name").val("Student");
        t01();
        var temp = $("#welcome").html();
        expect(temp).toEqual("Student");
    });

    // "T2: Seconds in year
    it("T2: Seconds in year", function () {
        // kutsutaan tarkistettavaa muuttujaa
        t02();
        // haetaan etusivulta html elementin arvo
        var temp = $("#seconds").html();
        // tarkistetaan onko se oikein
        expect(temp).toEqual("31536000");
    });

    // T3: Average
    it("T3: Average", function () {

        // asetetaan parametrit
        $("#first").val(5);
        $("#second").val(6);
        $("#third").val(7);

        // kutsutaan tarkistettavaa funktiota
        t03();

        // haetaan html-sivulle päivitetty vastaus
        var temp = $("#average").html();

        // jasminen tarkistusfunkkarila testataan onko arvo oikein
        expect(temp).toEqual("6");
    });

    // T4: Calculation
    it("T4: Calculation", function () {

        // asetetaan parametrit
        $("#number1").val(7);
        $("#number2").val(2);

        t04();

        var d1 = $("#d1").html();
        var d2 = $("#d2").html();
        var d3 = $("#d3").html();
        var d4 = $("#d4").html();
        var d5 = $("#d5").html();
        var d6 = $("#d6").html();
        var d7 = $("#d7").html();
        var d8 = $("#d8").html();
        var d9 = $("#d9").html();
        var d10 = $("#d10").html();
        var d11 = $("#d11").html();
        var d12 = $("#d12").html();
        var d13 = $("#d13").html();
        var d14 = $("#d14").html();
        var d15 = $("#d15").html();

        expect(d1).toEqual("7");
        expect(d2).toEqual("2");
        expect(d3).toEqual("9");
        expect(d4).toEqual("7");
        expect(d5).toEqual("2");
        expect(d6).toEqual("5");
        expect(d7).toEqual("7");
        expect(d8).toEqual("2");
        expect(d9).toEqual("14");
        expect(d10).toEqual("7");
        expect(d11).toEqual("2");
        expect(d12).toEqual("3.5");
        expect(d13).toEqual("7");
        expect(d14).toEqual("2");
        expect(d15).toEqual("1");
    });

    // T5: Discount
    it("T5: Discount", function () {
        $("#price").val(200);
        $("#percent").val(25);
        t05();
        var temp = $("#newprice").html();
        expect(temp).toEqual("150");
    });

    // T6: Age
    it("T6: Age", function () {
        $("#year").val(1990);
        t06();
        var age = (new Date().getFullYear()) - 1990;

        var temp = Number($("#age").html());

        expect(temp).toEqual(age);
    });

    // T7: Seats
    it("T7: Seats", function () {
        $("#seats").val(100);
        $("#guests").val(70);

        t07();
        var temp = $("#remaining").html();
        expect(temp).toEqual("30");
    });

    // T8: Plants
    it("T8: Plants", function () {
        $("#plants").val(4);
        $("#distance").val(40);

        t08();
        var temp1 = $("#length_cm").html();
        var temp2 = $("#length_m").html();
        expect(temp1).toEqual("160");
        expect(temp2).toEqual("1.6");
    });

    // T9: Shopping list
    it("T9: Shopping list", function () {
        $("#participant").val(10);

        t09();
        var sau = $("#sausages").html();
        var dri = $("#drinks").html();
        var tom = $("#tomatoes").html();
        var egg = $("#eggs").html();

        expect(sau).toEqual("30");
        expect(dri).toEqual("50");
        expect(tom).toEqual("20");
        expect(egg).toEqual("10");
    });
});
