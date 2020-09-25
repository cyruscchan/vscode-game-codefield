import * as vscode from 'vscode';
/**
 * Process for player 1 (Setter)
 * @author cyruscchan
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
     * @param vert Vertical
     */
    invalid(x:number, y:number, vert:boolean):boolean;
}

/**
 * A flow for executing this game
 * @author cyruscchan
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
                invalid(x: number, y: number, vert:boolean): boolean {
                    throw new Error('Method not implemented.');
                }
            }
        } else {
            this.onePOp = class implements playerone {
                deploy(): void {
                    throw new Error('Method not implemented.');
                }
                invalid(x: number, y: number, vert:boolean): boolean {
                    throw new Error('Method not implemented.');
                }
                
            }
        }
    }
    public startGame() {
        this.onePOp.deploy();
    }
}