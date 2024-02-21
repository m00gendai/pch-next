export interface NavbarItem{
    name: string
    url: string
    sub?: NavbarItem[]
}