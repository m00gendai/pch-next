interface ShootingDayResponse{
    items: Item[]
    totalItems: number
}

interface SwissgriddedShootingDays{
    items: SwissgriddedItem[]
    totalItems: number
}

interface Item{
    disciplineId: string
    disciplineShortNameGerman: string
    disciplineShortNameFrench: string
    disciplineShortNameItalian: string
    disciplineLongNameGerman: string
    disciplineLongNameFrench: string
    disciplineLongNameItalian: string
    from: string
    to: string
    type: number
    firingRangeId: string
    firingRangeName: string
    event: string
    location: string
    combinedLocationString: string
    coordinates: string
    canton: string
    year: number
    organizationId: string
    organizationName: string
    id: string
}

interface SwissgriddedItem{
    disciplineId: string
    disciplineShortNameGerman: string
    disciplineShortNameFrench: string
    disciplineShortNameItalian: string
    disciplineLongNameGerman: string
    disciplineLongNameFrench: string
    disciplineLongNameItalian: string
    from: string
    to: string
    type: number
    firingRangeId: string
    firingRangeName: string
    event: string
    location: string
    combinedLocationString: string
    coordinates: swissgrid
    canton: string
    year: number
    organizationId: string
    organizationName: string
    id: string
}

interface swissgrid{
    northing: string
    easting: string
}