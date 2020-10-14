import * as vscode from 'vscode';

/**
 * Process for player 1 (Setter)
 * @author cyruscchan
 */
interface PlayerOne {
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
export class GameFlow extends CodeField {
    private onePOp: any;
    /**
     * 
     * @param oneP Does player one is human or not
     */
    constructor(oneP:boolean) {
        super();
        var deployed:number = 0; //Total of deployed ship, also as id of the 'ship'
        if (!oneP) {
            this.onePOp = class implements PlayerOne {
                deploy(): void {
                    do {
                        var rackSet:boolean = false;
                        //Do human deploy
                        while (!rackSet) {
                            const userDeployLoc = vscode.window.showInputBox({
                                placeHolder: "Enter the hex-location to deploy " + CodeField.ship[deployed].name + " (Size: " + CodeField.ship[deployed].size + "). Press Esc to exit"
                            });
                        }
                    } while (deployed < CodeField.ship.length);
                }
                invalid(x: number, y: number, vert:boolean): boolean {
                    throw new Error('Method not implemented.');
                }
            };
        } else {
            this.onePOp = class implements PlayerOne {
                deploy(): void {
                    do {
                        //Do automated deploy
                    } while (deployed < CodeField.ship.length);
                }
                invalid(x: number, y: number, vert:boolean): boolean {
                    throw new Error('Method not implemented.');
                }
                
            };
        }
    }
    
    public startGame() {
        this.onePOp.deploy();
    }
}