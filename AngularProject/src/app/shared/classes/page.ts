
export class Page {

    items : Array<any>;
    currentItems : Array<any>          // Items currently displayed
    currentPage : number = 1;
    totalPages : number;
    perPage : number;
    arr = Array;

    constructor(perPage : number, items : Array<any>){
        this.perPage = perPage;
        this.items = items;
        this.totalPages = (items.length > 0) ? Math.ceil(items.length/perPage) : 1;
        this.setPage(1);
    }

    setPage(page : number){
        if(page > 0 && page <= this.totalPages){
            this.currentPage = page;
            let firstindex : number = (page-1)*this.perPage;
            let result = new Array<any>();
            for(let _i = firstindex; _i < firstindex + this.perPage; _i++){
                if(this.items[_i] === undefined)
                    break;
                result.push(this.items[_i]);
            }
            this.currentItems = result;
        }
    }
}