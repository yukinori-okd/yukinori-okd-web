import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, MY_NAME } from '../consts';

export async function GET(context) {
    const posts = await getCollection('posts');
    return rss({
        title: MY_NAME,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: posts.map((post) => ({
            ...post.data,
            link: `/posts/${post.id}/`,
        })),
    });
}
