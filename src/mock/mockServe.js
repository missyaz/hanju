import Mock from 'mockjs';

import detail from "./teleplayDetail.json";

Mock.mock("/daily/mock/detail",{code:200,data:detail});