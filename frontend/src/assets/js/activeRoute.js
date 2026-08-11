const getNavClass = (pathname, path) => {
    const active = pathname === path || pathname.startsWith(path + '/');
    return active ? 'nav-item active' : 'nav-item';
}

export default getNavClass;