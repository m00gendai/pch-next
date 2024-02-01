export interface DirectoryResponse{
    result: string
    data: Directory[]
    items_per_page: number
    page: number
    response_at: number
}

export interface Directory{
    id: number,
    name: string
    path: string
    type: string
    status: null
    visibility: string
    drive_id: number
    depth: number
    created_by: number
    created_at: number
    added_at: number
    last_modified_at: number
    parent_id: number
    color: null
}

export interface FileResponse{
    result: string
    data: File[]
    items_per_page: number
    page: number
    response_at: number
}


export interface File{
    id: number
    name: string
    type: string
    status: null,
    visibility: string
    drive_id: number
    depth: number
    created_by: number
    created_at: null,
    added_at: number
    last_modified_at: number
    parent_id: number
    size: number
    has_thumbnail: true,
    has_onlyoffice: false,
    mime_type: string
    extension_type: string
    scan_status: string  
}

export interface PageContent{
    chapter: Chapter
    _modified: number
    _mby: string
    _created: number
    _state: number
    _cby: string
    _id: string
}

export interface Chapter{
    title: string
    content: Content[]
}

export interface Content{
    text: string
    table: Table[]
    images: Medium[]
    documents: Document[]
}

export interface Medium {
    path: string
    title: string
    mime: string
    type: string
    description: string
    tags: string[]
    size: number
    colors: string[]
    width: number
    height: number
    _hash: string
    _created: number
    _modified: number
    _cby: string
    folder: string
    _id: string
  }

  export interface Document {
    path: string;
    title: string;
    mime: string;
    type: string;
    description: string;
    tags: string[];
    size: number;
    colors: string[] | null;
    width: string | null;
    height: string | null;
    _hash: string;
    _created: number;
    _modified: number;
    _cby: string;
    folder: string;
    _id: string;
  }

  export interface Table{
    column: Column
  }

  export interface Column{
    [key:string]: string
  }