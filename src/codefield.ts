import * as vscode from 'vscode';

/**
 * A class that contain elements for this game
 * @author rk0_d 
 */
class codefield {
    static ship = [
        {"name":"Mainframe","size":5},
        {"name":"Server","size":5},
        {"name":"Desktop","size":4},
        {"name":"Laptop","size":3},
        {"name":"Single-Board Computer","size":2},
        {"name":"Embedded","size":2}
    ];
    private static field = (function(){
        var row = new Array(16);
        row.forEach(y => {
            y = new Array(row.length);            
        });
        return row;
    });
    public newGrid() {
        return codefield.field;
    }
}

/**
 * Process for player 1 (Setter)
 * @author rk0_d
 */
interface playerone {
    /**
     * Set computer
     */
    deploy():void;
    /**
     * Check is it valid position for deploying
     * @param x X position (Column)
     * @param y Y position (Row)
     */
    invalid(x:number, y:number):boolean;
}

/**
 * A flow for executing this game
 * @author rk0_d
 */
class gameflow extends codefield {
    private onePOp: any;
    /**
     * 
     * @param oneP Does player one is human or not
     */
    constructor(oneP:boolean) {
        super();
        var deployed:number = 0;
        if (!oneP) {
            this.onePOp = class implements playerone {
                deploy(): void {
                    do {

                    } while (deployed < codefield.ship.length);
                }
                invalid(x: number, y: number): boolean {
                    throw new Error('Method not implemented.');
                }
            }
        } else {
            this.onePOp = class implements playerone {
                deploy(): void {
                    throw new Error('Method not implemented.');
                }
                invalid(x: number, y: number): boolean {
                    throw new Error('Method not implemented.');
                }
                
            }
        }
    }
}