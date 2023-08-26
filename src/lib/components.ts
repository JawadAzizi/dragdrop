interface Component{
    id: number
    name: string,
    image: string,
    template: string,
}

export const components: Component[] = [
    {
        id: 1,
        name: 'view',
        image: './view.svg',
        template: '<div u-component >this is view</div>'
    },
    {
        id: 2,
        name: 'col',
        image: './col.svg',
        template: '<div u-component u-col>this is col</div>'
    },
    {
        id: 3,
        name: 'row',
        image: './row.svg',
        template: '<div u-component u-row>this is row</div>'
    },
    {
        id: 4,
        name: 'divider',
        image: './divider.svg',
        template: '<div u-component u-divi>this is divider</div>'
    },
    {
        id: 5,
        name: 'input',
        image: './input.svg',
        template: '<input u-component u-input  />'
    },
    {
        id: 6,
        name: 'spinner',
        image: './spinner.svg',
        template: "<div u-component u-spinner u-spinner-size ='xl'></div>"
    },
]
