import dynamic from 'next/dynamic';

export default function loadComponent(module) {
    return dynamic(
        () => import('../components').then((mod) => mod[`${module}`]),
        {
            ssr: false
        }
    );
}
