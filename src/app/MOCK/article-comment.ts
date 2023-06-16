import {ArticleComment} from '../Interfaces/article-comment';

export const COMMENT: ArticleComment[] = [
  {
    id: 1,
    article: 1,
    content: '\n' +
      '\n' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tellus ut nisl fermentum commodo ac eget nisi. Maecenas et finibus leo. Etiam sed facilisis metus. Morbi nibh nisi, porttitor a porta euismod, aliquam mattis mi. Proin cursus urna in dictum sodales. Donec vel ipsum pulvinar lorem aliquam vulputate pulvinar ac nisi. Quisque iaculis felis vel nibh euismod, sed posuere felis interdum. Nullam ipsum sem, porta sed posuere in, tempus eget enim. Fusce semper ultrices quam eget feugiat. Nam id sapien purus. Mauris eget faucibus massa. Morbi rhoncus, odio eu lobortis pulvinar, erat orci suscipit dui, eu lacinia lacus ex id ex. ',
    owner: {
      id: 1,
      name: "Samuel POUZET"
    },
    date: "2023-06-11",
  },
  {
    id: 2,
    article: 1,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tellus ut nisl fermentum commodo ac eget nisi. Maecenas et finibus leo. Etiam sed facilisis metus. Morbi nibh nisi, porttitor a porta euismod, aliquam mattis mi. Proin cursus urna in dictum sodales. Donec vel ipsum pulvinar lorem aliquam vulputate pulvinar ac nisi. Quisque iaculis felis vel nibh euismod, sed posuere felis interdum. Nullam ipsum sem, porta sed posuere in, tempus eget enim. Fusce semper ultrices quam eget feugiat. Nam id sapien purus. Mauris eget faucibus massa. Morbi rhoncus, odio eu lobortis pulvinar, erat orci suscipit dui, eu lacinia lacus ex id ex. ',
    owner: {
      id: 2,
      name: "Lara RIEUSSET"
    },
    date: "2023-06-11",
  },
  {
    id: 3,
    article: 2,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tellus ut nisl fermentum commodo ac eget nisi. Maecenas et finibus leo. Etiam sed facilisis metus. Morbi nibh nisi, porttitor a porta euismod, aliquam mattis mi. Proin cursus urna in dictum sodales. Donec vel ipsum pulvinar lorem aliquam vulputate pulvinar ac nisi. Quisque iaculis felis vel nibh euismod, sed posuere felis interdum. Nullam ipsum sem, porta sed posuere in, tempus eget enim. Fusce semper ultrices quam eget feugiat. Nam id sapien purus. Mauris eget faucibus massa. Morbi rhoncus, odio eu lobortis pulvinar, erat orci suscipit dui, eu lacinia lacus ex id ex. ',
    owner: {
      id: 2,
      name: "Lara RIEUSSET"
    },
    date: "2023-06-11",
  },
];
