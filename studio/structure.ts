import { StructureBuilder } from 'sanity/structure'

export default (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('certificate').title('Certificates'),
      S.documentTypeListItem('technology').title('Technologies'),
    ])