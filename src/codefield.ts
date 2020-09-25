/**
 * A class that contain elements for this game
 * @author cyruscchan
 */
class CodeField {
    static ship = [
        {"name":"Mainframe","size":5},
        {"name":"Server","size":5},
        {"name":"Desktop","size":4},
        {"name":"Laptop","size":3},
        {"name":"Single-Board Computer","size":2},
        {"name":"Embedded","size":2}
    ];
    private field = (function(){
        var row = new Array(16);
        row.forEach(y => {
            y = new Array(row.length);            
        });
        return row;
    });
    /**
     * Get new grid
     */
    public newGrid() {
        return this.field;
    }
    /**
     * A "decoder" that convert hex to dec
     * @param hex hex from string
     */
    public static hexDecode(hex:string):number {
        if (hex.length!==1) {
            throw new RangeError("Calm down and input one number only");
        }
        var convRes = 0;
        switch (hex.toUpperCase()) {
            case "F": ++convRes;
            case "E": ++convRes;
            case "D": ++convRes;
            case "C": ++convRes;
            case "B": ++convRes;
            case "A": ++convRes;
            case "9": ++convRes;
            case "8": ++convRes;
            case "7": ++convRes;
            case "6": ++convRes;
            case "5": ++convRes;
            case "4": ++convRes;
            case "3": ++convRes;
            case "2": ++convRes;
            case "1": ++convRes; break;
            case "0": break; //Do absolute nothing
            default: throw new TypeError("Onlu accept 0-F, you should known this...");
        }
        return convRes;
    }
}

